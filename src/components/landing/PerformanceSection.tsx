import { TrendingUp } from "lucide-react";

const stats = [
  {
    platform: "구글 (지메일)",
    monthly: "129,600건",
    daily: "4,320건/일",
    color: "text-accent",
  },
  {
    platform: "네이버",
    monthly: "1,296,000건",
    daily: "43,200건/일",
    color: "text-success",
    badge: "3배 증가",
  },
];

const PerformanceSection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Performance</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-hero-foreground">
            발송 성능 및 최적화
          </h2>
          <p className="mt-4 text-hero-muted max-w-2xl mx-auto">
            텍스트 이메일 기준 월 최대 200만 건 수준 발송 가능
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.platform}
              className="p-8 rounded-2xl border border-stat-border bg-stat/60 backdrop-blur-sm relative overflow-hidden"
            >
              {stat.badge && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-success/20 text-success text-xs font-semibold">
                  {stat.badge}
                </span>
              )}
              <div className="text-sm text-hero-muted mb-2">{stat.platform}</div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                {stat.monthly}
              </div>
              <div className="text-sm text-hero-muted">{stat.daily}</div>
            </div>
          ))}
        </div>

        {/* Warmup & optimization info */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl border border-stat-border bg-stat/40 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-hero-foreground mb-2">IP·도메인 웜업</h3>
                <p className="text-hero-muted leading-relaxed text-sm">
                  신규 환경 시 최대 7일 이내 집중 관리로 빠른 안정화를 지원합니다.
                  수신 서버별 세분화 발송과 발송 간격·패턴 최적화로 오픈율을 극대화합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
