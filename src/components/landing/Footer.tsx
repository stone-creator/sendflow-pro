import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero border-t border-stat-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Mail className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="text-base font-bold text-hero-foreground">​Maily</span>
          </div>

          <p className="text-sm text-hero-muted">
            © 2026 ​Maily.biz. 크몽을 통해 서비스를 제공합니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
