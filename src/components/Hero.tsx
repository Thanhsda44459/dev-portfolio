import { personalInfo } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-surface-container-lowest" id="home">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[30px]">person</span>
            </div>
            <div>
              <p className="text-primary text-sm font-medium tracking-widest uppercase">
                Sinh viên Kĩ thuật phần mềm
              </p>
              <p className="text-on-surface-variant text-sm">Đại học Sài Gòn</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-background leading-[1.15] tracking-tight mb-5">
            Xin chào, tôi là{' '}
            <span className="text-primary">{personalInfo.name}</span>.
            <br />
            Tôi xây dựng những sản phẩm số với sự tỉ mỉ.
          </h1>

          <p className="text-on-surface-variant text-[15px] leading-relaxed max-w-2xl mb-8">
            Sinh viên năm 3 tại Đại học Sài Gòn, yêu thích phát triển web, ứng dụng desktop và
            khám phá các công nghệ mới. Luôn tìm kiếm cơ hội để học hỏi và tạo ra những sản phẩm
            có giá trị.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              className="bg-primary text-on-primary px-7 py-3.5 rounded-xl text-sm font-medium shadow-md shadow-primary/20 flex items-center gap-2 hover:opacity-90 transition-opacity"
              href="#projects"
              onClick={e => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Xem dự án
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              className="border border-outline-variant text-on-surface px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-surface-container transition-colors duration-200"
              href="#contact"
              onClick={e => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
