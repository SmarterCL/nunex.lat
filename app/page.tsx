import NunexHeader from "@/components/nunex-header"
import NunexHero from "@/components/nunex-hero"
import NunexServices from "@/components/nunex-services"
import NunexEcosystem from "@/components/nunex-ecosystem"
import NunexProcess from "@/components/nunex-process"
import NunexContact from "@/components/nunex-contact"
import NunexFooter from "@/components/nunex-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <NunexHeader />
      <NunexHero />
      <NunexServices />
      <NunexEcosystem />
      <NunexProcess />
      <NunexContact />
      <NunexFooter />
    </div>
  )
}
