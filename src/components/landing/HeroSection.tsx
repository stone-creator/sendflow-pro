import { Zap, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 py-24 md:py-36 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stat-border bg-stat/50 mb-8">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-hero-muted">시스템 업그레이드 완료</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-tight max-w-4xl">
          대량 이메일 발송의
          <br />
          <span className="text-gradient">새로운 기준</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-hero-muted max-w-2xl leading-relaxed">
          자체 구축 서버로 안정적인 발송. 월 최대 200만 건 발송.
          <br className="hidden md:block" />
          SPF·DKIM·DMARC 완벽 인증으로 최고의 전달률을 실현합니다.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground px-8 py-6 text-base font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-glow">
            <Zap className="w-5 h-5 mr-2" />
            서비스 문의하기
          </Button>
          <Button variant="outline" size="lg" className="border-stat-border text-hero-foreground px-8 py-6 text-base font-semibold rounded-xl hover:bg-stat/50 transition-colors bg-transparent">
            자세히 알아보기
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          {[
            { value: "200만+", label: "월 최대 발송량" },
            { value: "3배↑", label: "네이버 발송 증가" },
            { value: "99.9%", label: "서버 가동률" },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl border border-stat-border bg-stat/40 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-hero-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
