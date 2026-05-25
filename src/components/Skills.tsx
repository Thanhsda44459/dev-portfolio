import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="bg-surface-container-low" id="skills">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-on-background tracking-tight">Kỹ năng</h2>
          <p className="text-on-surface-variant text-sm mt-1.5">
            Công nghệ và công cụ tôi sử dụng.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map(group => (
            <div
              key={group.name}
              className="bg-surface rounded-xl p-6 border border-surface-container-high hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[20px]">{group.icon}</span>
                </div>
                <h3 className="font-semibold text-on-surface">{group.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
