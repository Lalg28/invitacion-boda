import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Events from "@/components/sections/innerpages/Events"
import Clients2 from "@/components/sections/Clients2"


export default function PageEvents() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Events" />
    <Events />
    <Clients2 />

    </Layout>
    </>
  )
}