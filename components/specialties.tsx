import Image from 'next/image'
import { ClipboardList, DraftingCompass, FlaskConical, ShieldCheck } from 'lucide-react'

const companies = [
  {
    name: 'Impacto Soluções em Planejamento',
    tag: 'Planejamento & SMS',
    icon: ClipboardList,
    logo: '/images/logo-impacto.png',
    description:
      'Planejamento de serviços de manutenção industrial, projetos de engenharia e gerenciamento de projetos. Know-how em análise estatística de dados de SMS com foco na redução de acidentes e manutenção de equipamentos voltada à confiabilidade.',
    items: ['Planejamento de manutenção', 'Gerenciamento de projetos', 'Análise estatística de SMS'],
  },
  {
    name: 'Bonfim Magalhães Engenharia e Consultoria',
    tag: 'Projetos multidisciplinares',
    icon: DraftingCompass,
    logo: '/images/logo-bonfim-magalhaes.png',
    description:
      'Elaboração, consultoria e engenharia do proprietário em projetos multidisciplinares. Há mais de 10 anos atendendo com excelência a indústria de óleo e gás, offshore e onshore, refinarias, petroquímicas, termoelétricas e distribuição de combustível.',
    items: ['Engenharia do proprietário', 'Óleo e gás on/offshore', 'Refinarias e termoelétricas'],
  },
  {
    name: 'Aragão Bonfim Engenharia e Confiabilidade',
    tag: 'Inspeção & Confiabilidade',
    icon: ShieldCheck,
    logo: '/images/logo-aragao-bonfim.png',
    description:
      'Manutenção industrial, inspeção de equipamentos, ensaios não destrutivos, avaliação e emissão de laudo NR-13 e consultoria em engenharia de confiabilidade, com destaque na manutenção proativa a partir da coleta e análise de dados.',
    items: ['Laudos NR-13', 'Ensaios não destrutivos', 'Manutenção proativa'],
  },
  {
    name: 'Laboratório Impacto',
    tag: 'Calibração & Metrologia',
    icon: FlaskConical,
    logo: '/images/logo-laboratorio-impacto.png',
    description:
      'Tecnologia de ponta e equipe altamente qualificada em equipamentos de laboratório, analisadores de processo, esterilização e incubação. Calibração de massa, dimensional, pressão, temperatura e umidade, tempo e frequência, volume, ótica, acústica, elétrica, química e viscosidade.',
    items: ['Analisadores de processo', 'Esterilização e incubação', '12 grandezas de calibração'],
  },
]

export function Specialties() {
  return (
    <section id="especialidades" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Nossas especialidades
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-primary sm:text-4xl">
              Quatro empresas. Uma visão integrada da sua operação.
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Cada empresa do grupo atende a uma demanda específica do mercado de serviços de engenharia,
            sempre com foco em atividades voltadas para a indústria.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {companies.map((company, index) => {
            const Icon = company.icon
            return (
              <article
                key={company.name}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-48 items-center justify-center border-b border-border bg-gradient-to-br from-secondary to-card px-10">
                  <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {company.tag}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-5 font-heading text-5xl font-bold text-primary/10"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="relative h-28 w-full max-w-64">
                    <Image
                      src={company.logo}
                      alt={`Logotipo ${company.name}`}
                      fill
                      sizes="256px"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-primary">{company.name}</h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{company.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {company.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
