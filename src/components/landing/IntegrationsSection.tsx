const integrations = [
  { name: "Amazon SES", desc: "AWS 기반 대용량 발송 인프라" },
  { name: "Mailgun", desc: "개발자 친화적 이메일 API 서비스" },
  { name: "Mailjet", desc: "마케팅·트랜잭션 메일 통합 플랫폼" },
  { name: "Postmark", desc: "트랜잭션 메일 특화 고속 발송" },
  { name: "SendGrid", desc: "대규모 이메일 발송 최적화 플랫폼" },
  { name: "SparkPost", desc: "고급 전달률 분석 및 대용량 발송" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Integrations</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            외부 메일 서비스 연동
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            주요 이메일 인프라 서비스와 연동 가능. 추가 비용 없이 활용할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-soft transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-sm">
                  {item.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-card-foreground">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
