const milestones = [
  { year: '2008', text: 'Início das atividades da Impacto Soluções em Planejamento.' },
  { year: '2010', text: 'Formalização do 1º contrato de planejamento e controle de obras.' },
  {
    year: '2012',
    text: 'Comprovação da eficácia da metodologia de "Planejamento total para gestão de projetos de engenharia".',
  },
  { year: '2016', text: 'Assinatura do 1º contrato com a Petrobras.' },
  {
    year: '2018',
    text: 'Consolidação e expansão das atividades, passando a atuar com análise estática e consultoria em engenharia.',
  },
  {
    year: '2020',
    text: 'Primeiros contratos de consultoria em lubrificação e metrologia, com a abertura do laboratório de calibração.',
  },
  {
    year: '2021',
    text: 'Primeiros contratos da Aragão Bonfim e início do Grupo AB, atuando com laudo NR-13 e realização de END.',
  },
  { year: '2022', text: 'Início do processo de acreditação do laboratório de calibração.' },
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
            O grupo é o resultado do sucesso da Impacto em seus segmentos de atuação. Para implementar as
            melhores práticas de governança diante do crescimento das operações, nasce o Grupo Aragão
            Bonfim.
          </p>
        </div>

        <ol className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m) => (
            <li key={m.year} className="relative border-l-2 border-border pl-6 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-8">
              <span
                aria-hidden="true"
                className="absolute -left-[9px] top-1 size-4 rounded-full bg-accent ring-4 ring-background sm:-top-[9px] sm:left-0"
              />
              <p className="font-heading text-3xl font-bold text-primary">{m.year}</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
