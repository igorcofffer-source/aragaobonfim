import { Mail, MapPin, Phone } from 'lucide-react'

const channels = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '(71) 3051-0808',
    href: 'tel:+557130510808',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@grupoaragaobonfim.com.br',
    href: 'mailto:contato@grupoaragaobonfim.com.br',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Empresarial Torres Ferreira',
    href: 'https://www.google.com/maps/search/?api=1&query=Empresarial+Torres+Ferreira+Salvador',
  },
]

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl bg-primary">
          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-5 lg:p-16">
            <div className="lg:col-span-2">
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
                Contato
              </p>
              <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">
                Vamos conversar sobre o seu próximo projeto?
              </h2>
              <p className="mt-5 leading-relaxed text-primary-foreground/75">
                Nossa equipe está pronta para entender sua demanda e indicar a melhor solução do grupo
                para a sua operação.
              </p>
              <a
                href="mailto:contato@grupoaragaobonfim.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento"
                className="mt-8 inline-flex rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Solicitar orçamento
              </a>
            </div>

            <ul className="flex flex-col gap-4 lg:col-span-3">
              {channels.map((c) => {
                const Icon = c.icon
                const external = c.href.startsWith('http')
                return (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="flex items-center gap-5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 transition-colors hover:border-accent/60 hover:bg-primary-foreground/10"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="text-sm text-primary-foreground/60">{c.label}</span>
                        <span className="break-words font-heading text-lg font-semibold text-primary-foreground">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <p>
          {'© '}
          {new Date().getFullYear()} Grupo Aragão Bonfim. Todos os direitos reservados.
        </p>
        <p>Impacto · Bonfim Magalhães · Aragão Bonfim · Laboratório Impacto</p>
      </div>
    </footer>
  )
}
