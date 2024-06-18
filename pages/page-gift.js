import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Gift from "@/components/sections/innerpages/Gift"
import Clients2 from "@/components/sections/Clients2"


export default function PageGift() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Gift & Registry" />
    <Gift />
    <Clients2 />

    </Layout>
    </>
  )
}