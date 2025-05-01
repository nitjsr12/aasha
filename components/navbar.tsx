"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/about", target: "_self" },
    {
      name: "Our Work", href: "#", target: "_self", subLinks: [
        { name: "Current Causes", href: "/causes", target: "_self" },
        { name: "Past Initiatives", href: "/previous-causes", target: "_self" },
      ]
    },
    { name: "Blog", href: "/blog", target: "_self" },
    { name: "Gallery", href: "/gallery", target: "_self" },
  ];

  const socialMediaLinks = [
    { name: "Facebook", href: "https://www.facebook.com/share/1AX4JjHtcX/", icon: "/icons/facebook.svg", target: "_blank", rel: "noopener noreferrer" },
    { name: "Linkedin", href: "https://www.linkedin.com/company/%E0%A4%86%E0%A4%B6%E0%A4%BE/", icon: "/icons/icons8-linkedin.svg", target: "_blank", rel: "noopener noreferrer" },
    { name: "Instagram", href: "https://www.instagram.com/aasha_ki_ek_kiran?igsh=MXR4ZWJobW8ydWswag==", icon: "/icons/instagram.svg", target: "_blank",rel: "noopener noreferrer" },
    { name: "YouTube", href: "https://youtube.com/channel/UCSnDYm2-1n3CSV62APOmLOQ?si=JosGNTs9E3CAH8zd", icon: "/icons/youtube.svg", target: "_blank",rel: "noopener noreferrer" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-1" : "bg-white/80 backdrop-blur-sm py-3"
      }`}
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image src="/images/footer.png" alt="Logo" width={150} height={60} className="object-contain" />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex items-center gap-1 font-medium ${
                        pathname.includes(link.href) ? "text-primary" : "text-gray-800"
                      } hover:text-primary`}
                    >
                      {link.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-md w-48 z-50"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              target={link.target}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-medium ${
                      pathname === link.href ? "text-primary" : "text-gray-800"
                    } hover:text-primary`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setShowSearch(!showSearch)} className="text-gray-800 hover:text-primary">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-primary/90 shadow-md">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden gap-2">
            <button onClick={() => setShowSearch(!showSearch)} className="text-gray-800 hover:text-primary">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-primary">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Search Bar (Mobile & Desktop) */}
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 w-full bg-white shadow-md py-3 px-4"
              >
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-l-md focus:outline-primary"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 top-16 bg-white z-40 px-6 py-8 overflow-y-auto md:hidden"
                style={{ height: "calc(100vh - 64px)" }} // Proper mobile height
              >
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.subLinks ? (
                        <>
                          <button
                            onClick={() => toggleDropdown(link.name)}
                            className="flex items-center justify-between w-full font-semibold text-gray-800"
                          >
                            {link.name}
                            <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                          </button>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="pl-4 mt-2"
                            >
                              {link.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.name}
                                  href={subLink.href}
                                  className="block py-2 text-gray-600 hover:text-primary"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className="block text-gray-800 font-semibold py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Social Media Links */}
                  <div className="pt-6 border-t">
                    <div className="flex gap-4">
                      {socialMediaLinks.map((social) => (
                        <Link
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 rounded-full hover:bg-primary/10"
                          onClick={() => setIsOpen(false)}
                        >
                          <Image src={social.icon} alt={social.name} width={24} height={24} />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary text-white py-4 mt-6 hover:bg-primary/90">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
