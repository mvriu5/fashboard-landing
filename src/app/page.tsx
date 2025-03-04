import {Hero} from "@/components/sections/Hero"
import {Bento} from "@/components/sections/Bento"
import {FaqSection} from "@/components/sections/FaqSection"
import {Footer} from "@/components/sections/Footer"

export default function Home() {
    return (
      <div className={"h-screen w-screen pt-52"}>
          <Hero/>
          <Bento/>
          <FaqSection/>
          <Footer/>
      </div>
    )
}
