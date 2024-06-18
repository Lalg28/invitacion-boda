import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Countdown1 from "@/components/sections/Countdown1"
import Services1 from "@/components/sections/Services1"
import Gallery1 from "@/components/sections/Gallery1"
import GallerySlider1 from "@/components/sections/GallerySlider1"


export default function PageInvitaion2() {
  return (
    <>
    
    <Layout headerStyle={6} footerStyle={6}>
    <Banner1 />
    <Countdown1 />
    <Services1 />
    <Gallery1 />
    <GallerySlider1 />
    </Layout>
    </>
  )
}