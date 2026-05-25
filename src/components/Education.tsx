import { personalInfo, education } from '../data/portfolio'

export default function Education() {
  return (
    <section className="bg-surface" id="education">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-5 w-1 bg-primary rounded-full"></div>
          <h2 className="text-lg font-semibold text-on-background tracking-tight">Giới thiệu</h2>
        </div>

        <p className="text-on-surface-variant text-[15px] leading-relaxed mb-8 max-w-3xl">
          Tôi là <strong className="text-on-surface">{personalInfo.name}</strong>,{' '}
          {education.status} ngành {education.major} tại {education.school} ({education.period}).
          Tập trung phát triển kỹ năng về phát triển web (Front-end &amp; Back-end), xây dựng ứng
          dụng desktop và hệ thống thông tin. Tham gia các dự án thực hành về AI, thương mại điện
          tử và quản lý thư viện.
        </p>

        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px] text-primary">mail</span>
            {personalInfo.email}
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px] text-primary">call</span>
            {personalInfo.phone}
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
            {personalInfo.address}
          </div>
        </div>
      </div>
    </section>
  )
}
