import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section className="bg-surface-container-lowest" id="projects">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-on-background tracking-tight">Dự án</h2>
            <p className="text-on-surface-variant text-sm mt-1.5">
              Một số sản phẩm tôi đã xây dựng.
            </p>
          </div>
          <a
            className="text-primary text-sm font-medium flex items-center gap-1 hover:underline shrink-0"
            href="https://github.com/Thanhsda44459"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-surface rounded-xl overflow-hidden border border-surface-container-high hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    {project.category === 'AI / ML'
                      ? 'smart_toy'
                      : project.category === 'Web App'
                        ? 'shopping_cart'
                        : 'menu_book'}
                  </span>
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-semibold text-on-surface mb-2">{project.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="text-[11px] bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://github.com/Thanhsda44459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="material-symbols-outlined text-[18px] text-on-surface-variant hover:text-primary transition-colors"
                  >
                    link
                  </a>
                  <a
                    href="https://github.com/Thanhsda44459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="material-symbols-outlined text-[18px] text-on-surface-variant hover:text-primary transition-colors"
                  >
                    code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
