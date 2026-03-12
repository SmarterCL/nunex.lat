import NunexHeader from "@/components/nunex-header"
import NunexHero from "@/components/nunex-hero"
import NunexServices from "@/components/nunex-services"
import NunexTeam from "@/components/nunex-team"
import NunexEcosystem from "@/components/nunex-ecosystem"
import NunexRegions from "@/components/nunex-regions"
import NunexProcess from "@/components/nunex-process"
import NunexContact from "@/components/nunex-contact"
import NunexFooter from "@/components/nunex-footer"

import NunexProperties from "@/components/nunex-properties"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <NunexHeader />
      <NunexHero />
      <NunexServices />
      <NunexProperties />
      <NunexTeam />
      <NunexEcosystem />
      <NunexRegions />
      <NunexProcess />
      <NunexContact />
      <NunexFooter />
    </div>
  )
}
