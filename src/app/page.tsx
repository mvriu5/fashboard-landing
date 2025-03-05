import {Hero} from "@/components/sections/Hero"
import {Bento} from "@/components/sections/Bento"
import {FaqSection} from "@/components/sections/FaqSection"
import {Footer} from "@/components/sections/Footer"
import {Feature} from "@/components/sections/Feature"
import {Quote} from "@/components/sections/Quote"
import { WhiteBento } from "@/components/sections/WhiteBento"

export default function Home() {
    return (
      <div className={"overflow-x-hidden pt-52"}>
          <Hero/>
          <Bento/>
          <Quote/>
          <WhiteBento/>
          <Feature/>
          <FaqSection/>
          <Footer/>
      </div>
    )
}
