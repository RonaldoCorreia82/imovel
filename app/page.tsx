import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertyHero } from '@/components/sections/PropertyHero'
import { PropertySpecs } from '@/components/sections/PropertySpecs'
import { PhotoGallery } from '@/components/sections/PhotoGallery'
import { FloorPlan } from '@/components/sections/FloorPlan'
import { PropertyAbout } from '@/components/sections/PropertyAbout'
import { PropertyLocation } from '@/components/sections/PropertyLocation'
import { PropertyFAQ } from '@/components/sections/PropertyFAQ'
import { ContactForm } from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PropertyHero />
        <PropertySpecs />
        <PhotoGallery />
        <FloorPlan />
        <PropertyAbout />
        <PropertyLocation />
        <PropertyFAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
