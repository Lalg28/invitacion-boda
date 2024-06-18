import Layout from "@/components/layout/Layout"
import Banner3 from "@/components/sections/Banner3"
import Clients3 from "@/components/sections/Clients3"
import Contact3 from "@/components/sections/Contact3"
import Countdown3 from "@/components/sections/Countdown3"
import Gallery3 from "@/components/sections/Gallery3"
import GallerySlider3 from "@/components/sections/GallerySlider3"
import News3 from "@/components/sections/News3"
import Services3 from "@/components/sections/Services3"
import Story3 from "@/components/sections/Story3"
import Team3 from "@/components/sections/Team3"
import Testimonial3 from "@/components/sections/Testimonial3"
export default function Home3() {

  return (
    <>
    <Layout headerStyle={3} footerStyle={3}>
    <Banner3 />
    <Services3 />
    <Team3 />
    <Story3 />
    <Countdown3 />
    <Gallery3 />
    <Testimonial3 />
    <Clients3 />
    <Contact3 />
    <News3 />
    <GallerySlider3 />
    </Layout>
    </>
    )
}