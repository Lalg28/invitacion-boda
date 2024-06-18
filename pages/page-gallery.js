import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Gallery from "@/components/sections/innerpages/Gallery"


export default function PageGallery() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Our Gallery" />
    <Gallery />

    </Layout>
    </>
  )
}