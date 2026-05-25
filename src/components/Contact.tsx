import { personalInfo } from '../data/portfolio'

export default function Contact() {
  return (
    <section className="bg-surface" id="contact">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-on-background tracking-tight mb-3">
              Liên hệ
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Nếu bạn có câu hỏi, ý tưởng hay muốn hợp tác, đừng ngần ngại gửi email cho tôi nhé.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors"
            >
              <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
              </div>
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors"
            >
              <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[18px]">call</span>
              </div>
              {personalInfo.phone}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-colors"
            >
              <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[18px]">code</span>
              </div>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
