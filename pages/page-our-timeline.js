import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import OurTimeline from "@/components/sections/innerpages/OurTimeline"


export default function PageOurTimeline() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Our Timeline" />
    <OurTimeline />

    </Layout>
    </>
  )
}