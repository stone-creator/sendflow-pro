import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "대량 이메일 발송 전용 서버",
  "최적화된 발송 프로그램 포함",
  "SPF·DKIM·DMARC 인증 기본 설정",
  "IP·도메인 웜업 지원 (최대 7일)",
  "실시간 대시보드 제공",
  "자동 수신거부 처리 시스템",
  "외부 메일 서비스 연동 무료",
  "TLS 암호화 및 PTR 설정",
  "데이터 30일 안전 보관",
  "세금계산서 발행 가능",
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            합리적인 가격
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="p-8 md:p-10 rounded-3xl border-2 border-primary/20 bg-card shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Monthly</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold text-foreground">290,000</span>
                <span className="text-xl text-muted-foreground">원</span>
              </div>
              <p className="text-muted-foreground mb-8">월 / 세금계산서 발행 가능</p>

              <div className="space-y-3.5 mb-10">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-success" />
                    </div>
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-gradient-primary text-primary-foreground py-6 text-base font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-glow">
                <Zap className="w-5 h-5 mr-2" />
                서비스 신청하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
