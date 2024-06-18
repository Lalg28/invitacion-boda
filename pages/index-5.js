import Layout from "@/components/layout/Layout"
import Banner5 from "@/components/sections/Banner5"
import Event5 from "@/components/sections/Event5"
import Funfact5 from "@/components/sections/Funfact5"
import Gallery5 from "@/components/sections/Gallery5"
import Gallery5T2 from "@/components/sections/Gallery5T2"
import Marquee5 from "@/components/sections/Marquee5"
import News5 from "@/components/sections/News5"
import Pricing5 from "@/components/sections/Pricing5"
import Services5 from "@/components/sections/Services5"
import Story5 from "@/components/sections/Story5"
export default function Home5() {

  return (
    <>
    <Layout headerStyle={5} footerStyle={5}>
    <Banner5 />
    <Gallery5 />
    <Event5 />
    <Services5 />
    <Marquee5 />
    <Story5 />
    <Gallery5T2 />
    <Pricing5 />
    <Funfact5 />
    <News5 />
    </Layout>
    </>
    )
}