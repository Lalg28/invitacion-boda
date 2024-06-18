import Layout from "@/components/layout/Layout"
import Banner4 from "@/components/sections/Banner4"
import Clients4 from "@/components/sections/Clients4"
import Countdown4 from "@/components/sections/Countdown4"
import Couple4 from "@/components/sections/Couple4"
import Gallery4 from "@/components/sections/Gallery4"
import News4 from "@/components/sections/News4"
import Story4 from "@/components/sections/Story4"
import Team4 from "@/components/sections/Team4"
import Team4T4 from "@/components/sections/Team4T4"
import Testimonial4 from "@/components/sections/Testimonial4"
import Video4 from "@/components/sections/Video4"
export default function Home4() {

  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <Banner4 />
    <Couple4 />
    <Countdown4 />
    <Story4 />
    <Video4 />
    <Team4 />
    <Team4T4 />
    <Clients4 />
    <Testimonial4 />
    <Gallery4 />
    <News4 />
    </Layout>
    </>
    )
}