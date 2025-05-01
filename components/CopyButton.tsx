// components/CopyButton.tsx
'use client';

import { useState } from 'react';
import { Button } from "./ui/button";
import { Link2, Check } from "lucide-react";

interface CopyButtonProps extends React.ComponentProps<typeof Button> {
  url: string;
}

export function CopyButton({ url, ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={copyToClipboard}
      aria-label="Copy link"
      className="rounded-full"
      {...props}
    >
      {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
    </Button>
  );
}