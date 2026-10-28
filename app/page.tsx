import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Specialties } from '@/components/specialties'
import { About } from '@/components/about'
import { History } from '@/components/history'
import { Contact, SiteFooter } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Specialties />
        <About />
        <History />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
