import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-hero/95 backdrop-blur-md border-b border-stat-border sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-hero-foreground">​Maily.biz</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">기능</a>
          <a href="#performance" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">성능</a>
          <a href="#pricing" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">가격</a>
        </div>

        <Button size="sm" asChild className="bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          <a href="https://kmong.com/gig/653616" target="_blank" rel="noopener noreferrer">
            문의하기
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
