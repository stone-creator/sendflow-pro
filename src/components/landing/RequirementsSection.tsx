import { Globe, User, Database, FileText } from "lucide-react";

const requirements = [
  {
    icon: Globe,
    title: "발송 도메인",
    description: "구매한 도메인 필요 (이메일 서비스 구매 불필요, 네임서버 변경 가능해야 함)",
  },
  {
    icon: User,
    title: "발신 정보",
    description: "발송에 사용할 이메일 주소 및 표시될 이름",
  },
  {
    icon: Database,
    title: "수신자 목록",
    description: "발송에 사용할 수신자 데이터베이스(DB)",
  },
  {
    icon: FileText,
    title: "이메일 콘텐츠",
    description: "이메일 제목 및 본문 내용",
  },
];

const RequirementsSection = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Requirements</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-hero-foreground">
            의뢰인 준비사항
          </h2>
          <p className="mt-4 text-hero-muted max-w-2xl mx-auto">
            아래 항목만 준비해 주시면, 세팅·웜업·인증까지 모두 지원해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {requirements.map((req, index) => (
            <div
              key={req.title}
              className="flex gap-5 p-6 rounded-2xl border border-stat-border bg-stat/40"
            >
              <div className="w-12 h-12 rounded-xl bg-stat/60 flex items-center justify-center flex-shrink-0">
                <req.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-accent">0{index + 1}</span>
                  <h3 className="font-semibold text-hero-foreground">{req.title}</h3>
                </div>
                <p className="text-sm text-hero-muted leading-relaxed">{req.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
