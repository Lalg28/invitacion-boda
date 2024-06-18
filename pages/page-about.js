import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Event1 from "@/components/sections/Event1"
import AboutTeam from "@/components/sections/innerpages/AboutTeam"
import AboutGallery from "@/components/sections/innerpages/AboutGallery"
import AboutClients from "@/components/sections/innerpages/AboutClients"


export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="About Us" />
    <Event1 />
    <AboutTeam />
    <AboutGallery />
    <AboutClients />

    </Layout>
    </>
  )
}