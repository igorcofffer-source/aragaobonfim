const milestones = [
  {
    label: 'O início',
    title: 'Nasce a Impacto',
    text: 'A Impacto Soluções em Planejamento conquista espaço no planejamento de manutenção industrial e na análise de dados de SMS.',
  },
  {
    label: 'Expansão',
    title: 'Novos segmentos',
    text: 'O sucesso da Impacto em seus segmentos dá origem a novas frentes: engenharia multidisciplinar, confiabilidade e calibração.',
  },
  {
    label: '2020',
    title: 'Legis e Propter',
    text: 'Com a aquisição dos sistemas Legis e Propter, soma-se mais uma empresa ao grupo.',
  },
  {
    label: 'Hoje',
    title: 'Governança e crescimento',
    text: 'Para implementar as melhores práticas de governança diante do crescimento das operações, nasce o Grupo Aragão Bonfim.',
  },
]

export function History() {
  return (
    <section id="historia" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Quem somos
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-primary sm:text-4xl">
            Uma breve história do Grupo Aragão Bonfim
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            O grupo é o resultado do sucesso da Impacto em seus segmentos de atuação, uma trajetória
            construída com técnica, confiança e resultados.
          </p>
        </div>

        <div className="relative mt-16">
        <div
          aria-hidden="true"
          className="absolute left-[11px] top-3 h-[calc(100%-1.5rem)] w-px bg-border md:left-0 md:top-[11px] md:h-px md:w-full"
        />
        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {milestones.map((m) => (
            <li key={m.title} className="relative pl-10 md:pl-0 md:pt-12">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0.5 flex size-6 items-center justify-center rounded-full bg-accent ring-4 ring-background md:top-0"
              >
                <span className="size-2 rounded-full bg-accent-foreground" />
              </span>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                {m.label}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-primary">{m.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}
