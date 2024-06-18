import Layout from "@/components/layout/Layout"
import Banner2 from "@/components/sections/Banner2"
import Clients2 from "@/components/sections/Clients2"
import Contact2 from "@/components/sections/Contact2"
import Countdown2 from "@/components/sections/Countdown2"
import Couple2 from "@/components/sections/Couple2"
import Event2 from "@/components/sections/Event2"
import Gallery2 from "@/components/sections/Gallery2"
import GallerySlider2 from "@/components/sections/GallerySlider2"
import News2 from "@/components/sections/News2"
import Services2 from "@/components/sections/Services2"
import Team2 from "@/components/sections/Team2"
export default function Home2() {

  return (
    <>
    <Layout headerStyle={2} footerStyle={2}>
    <Banner2 />
    <Services2 />
    <Couple2 />
    <Countdown2 />
    <Event2 />
    <Contact2 />
    <Team2 />
    <Gallery2 />
    <News2 />
    <Clients2 />
    <GallerySlider2 />
    </Layout>
    </>
    )
}