import Image from 'next/image'
import { Award, Gauge, Leaf, Scale } from 'lucide-react'

const principles = [
  {
    icon: Scale,
    title: 'Conformidade legal',
    text: 'Cumprimento rigoroso de todas as obrigações legais e normativas.',
  },
  {
    icon: Gauge,
    title: 'Alto desempenho',
    text: 'Incentivo contínuo à produtividade e à excelência técnica.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    text: 'Crescimento com sustentabilidade econômica em cada projeto.',
  },
  {
    icon: Award,
    title: 'Qualidade',
    text: 'Nenhum resultado vale mais do que a qualidade entregue.',
  },
]

export function About() {
  return (
    <section id="grupo" className="scroll-mt-20 bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Conheça o grupo
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold sm:text-4xl">
              Acreditamos que o crescimento é consequência de fazer o certo.
            </h2>
            <div className="mt-8 flex flex-col gap-5 leading-relaxed text-primary-foreground/80">
              <p>
                O Grupo Aragão Bonfim é formado pelas empresas Impacto Soluções em Planejamento, Bonfim
                Magalhães Engenharia e Consultoria, Aragão Bonfim Engenharia e Confiabilidade e pelo
                Laboratório Impacto.
              </p>
              <p>
                Com mais de 10 anos no mercado, o grupo destaca-se no desenvolvimento de projetos para a
                indústria onshore e offshore, consultoria em manutenção industrial com foco na
                confiabilidade, inspeção de integridade e laudo NR-13 com ensaios não destrutivos, análise
                estatística de dados de SMS e calibração de analisadores, equipamentos e instrumentos.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-colors hover:border-accent/50"
                >
                  <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        <figure className="mt-20">
          <div className="relative aspect-[8/5] overflow-hidden rounded-2xl ring-1 ring-primary-foreground/15">
            <Image
              src="/images/foto-site.jpeg"
              alt="Mosaico de fotos dos colaboradores do Grupo Aragão Bonfim no escritório e no laboratório"
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-primary-foreground/60">
            Nossa equipe: profissionais qualificados no escritório, em campo e no laboratório.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
