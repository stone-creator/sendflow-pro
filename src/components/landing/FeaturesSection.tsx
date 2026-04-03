import { Shield, Zap, Globe, BarChart3, UserCheck, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "전면 교체된 발송 시스템",
    description: "발송 효율과 안정성 대폭 향상. 의뢰인이 직접 발송 설정 및 실행 가능.",
  },
  {
    icon: Shield,
    title: "SPF·DKIM·DMARC 인증",
    description: "주요 수신처 규제를 완벽히 준수하여 높은 전달률을 보장합니다.",
  },
  {
    icon: Globe,
    title: "주요 이메일 서비스 호환",
    description: "구글 워크스페이스, 네이버웍스, 다음 스마트워크 등과 완벽 호환.",
  },
  {
    icon: BarChart3,
    title: "실시간 대시보드",
    description: "발송량·오픈율·수신거부 등 실시간 진행 상황을 한눈에 확인.",
  },
  {
    icon: UserCheck,
    title: "자동 수신거부 처리",
    description: "원클릭 수신거부 링크 삽입 및 즉시 자동 처리. 정보통신망법 준수.",
  },
  {
    icon: Lock,
    title: "데이터 보안 관리",
    description: "모든 데이터 30일 안전 보관, 서비스 종료 시 즉시 영구 삭제.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Features</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            안정적이고 효율적인 발송 시스템
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            타사 서비스를 거치지 않고 직접 구축한 서버를 통해 안정적으로 발송합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-7 rounded-2xl border border-border bg-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
