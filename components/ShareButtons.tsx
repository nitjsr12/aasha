// components/ShareButtons.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook, Share2 } from "lucide-react";
import { CopyButton } from "./CopyButton";

interface ShareButtonsProps {
  url: string;
  title: string;
  shareTitle: string;
}

export function ShareButtons({ url, title, shareTitle }: ShareButtonsProps) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: shareTitle,
          url: url,
        });
      } else {
        await navigator.clipboard.writeText(`${shareTitle} ${url}`);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full sm:w-auto">
      <Button 
        onClick={handleShare}
        className="w-full sm:w-auto gap-2"
        variant="outline"
      >
        <Share2 className="w-4 h-4" />
        Share Article
      </Button>
      <div className="flex justify-center gap-2">
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </Button>
        <CopyButton url={url} />
      </div>
    </div>
  );
}