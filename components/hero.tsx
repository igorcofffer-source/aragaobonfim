import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '10+', label: 'anos de mercado' },
  { value: '4', label: 'empresas integradas' },
  { value: '12', label: 'grandezas calibradas' },
  { value: 'On & Offshore', label: 'atuação em óleo e gás' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-primary">
      <Image
        src="/images/equipe-gab.png"
        alt="Equipe do Grupo Aragão Bonfim reunida no escritório"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-top opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/30"
      />

      <div className="mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-6 pb-16 pt-32">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            Engenharia, confiabilidade e calibração
          </p>
          <h1 className="text-balance font-heading text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Soluções completas de engenharia para a{' '}
            <span className="text-accent">indústria que não pode parar.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Do planejamento da manutenção ao laudo NR-13, de projetos multidisciplinares à calibração de
            instrumentos: quatro empresas especializadas, um único compromisso com qualidade e segurança.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#especialidades"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Conheça nossas especialidades
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center rounded-md border border-primary-foreground/30 px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-primary-foreground/15 bg-primary-foreground/15 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-primary/80 p-6 backdrop-blur">
              <dt className="text-sm text-primary-foreground/70">{stat.label}</dt>
              <dd className="mt-1 font-heading text-2xl font-bold text-primary-foreground sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
