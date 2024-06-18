import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import OurStory from "@/components/sections/innerpages/OurStory"


export default function PageOurStory() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Our Story" />
    <OurStory />

    </Layout>
    </>
  )
}