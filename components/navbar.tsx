"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    // Default to light mode (false)
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    
    // Apply dark mode class only if explicitly set
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const navLinks = [
    { name: "About Us", href: "/about" },
    { 
      name: "Our Work", 
      href: "#",
      subLinks: [
        { name: "Current Causes", href: "/causes" },
        { name: "Past Initiatives", href: "/previous-causes" },
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
   
  ];

  const socialMediaLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: "/icons/facebook.svg" },
    { name: "Twitter", href: "https://twitter.com", icon: "/icons/twitter.svg" },
    { name: "Instagram", href: "https://instagram.com", icon: "/icons/instagram.svg" },
    { name: "YouTube", href: "https://youtube.com", icon: "/icons/youtube.svg" },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-2" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20"> {/* Increased height */}
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src="/images/आशा (1).png" 
                alt="Hope Foundation Logo" 
                width={140}  // Increased size
                height={140}  // Increased size
                className="h-14 w-14 md:h-16 md:w-16 rounded-full border-2 border-primary/20 shadow-md"
              />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Aasha Ki Ek Kiran
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.subLinks ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium"
                    >
                      {link.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-100 dark:border-gray-700"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 transition-colors duration-150"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Desktop Right Side (Search and Dark Mode) */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            
            
            
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all">
              Contact Us
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          
          {/* Search Bar (Mobile & Desktop) */}
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md ${showSearch ? 'py-3 px-4' : ''}`}
              >
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Mobile Navigation - Increased height */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-20 bg-white dark:bg-gray-900 shadow-lg md:hidden pt-6 px-6 pb-8 overflow-y-auto"
                style={{ height: "calc(100vh - 5rem)" }} // Takes full viewport height minus navbar
              >
                <div className="flex flex-col space-y-6"> {/* Increased spacing */}
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-gray-100 dark:border-gray-800 pb-3">
                      {link.subLinks ? (
                        <>
                          <button
                            onClick={() => toggleDropdown(link.name)}
                            className="flex items-center justify-between w-full py-4 text-gray-700 dark:text-gray-300 hover:text-primary font-medium text-lg"
                          >
                            {link.name}
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                          </button>
                          
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden"
                            >
                              {link.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.name}
                                  href={subLink.href}
                                  className="block py-3 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
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
                          className="block py-4 text-gray-700 dark:text-gray-300 hover:text-primary font-medium text-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* Dark Mode Toggle in Mobile Menu */}
                  <div className="border-b border-gray-100 dark:border-gray-800 pb-3">
                    <button
                      onClick={toggleDarkMode}
                      className="flex items-center justify-between w-full py-4 text-gray-700 dark:text-gray-300 hover:text-primary font-medium text-lg"
                    >
                      {darkMode ? "Light Mode" : "Dark Mode"}
                      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {/* Social Media Icons in Mobile Menu */}
                  <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
                    <h3 className="text-gray-700 dark:text-gray-300 font-medium text-lg mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {socialMediaLinks.map((social) => (
                        <Link
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Image
                            src={social.icon}
                            alt={social.name}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/contact" className="mt-6" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all py-6 text-lg">
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