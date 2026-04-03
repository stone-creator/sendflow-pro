import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-hero-foreground mb-6">
          지금 바로 시작하세요
        </h2>
        <p className="text-lg text-hero-muted max-w-xl mx-auto mb-10">
          DB·콘텐츠·도메인만 준비해 주시면,
          <br />
          세팅부터 웜업·인증까지 모두 지원해 드립니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground px-8 py-6 text-base font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-glow">
            <Mail className="w-5 h-5 mr-2" />
            서비스 문의하기
          </Button>
          <Button variant="outline" size="lg" className="border-stat-border text-hero-foreground px-8 py-6 text-base font-semibold rounded-xl hover:bg-stat/50 transition-colors bg-transparent">
            크몽에서 보기
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
