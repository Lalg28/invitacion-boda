import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import PricingTable from "@/components/sections/innerpages/PricingTable"
import Clients2 from "@/components/sections/Clients2"


export default function PagePricingTable() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Pricing Table" />
    <PricingTable />
    <Clients2 />

    </Layout>
    </>
  )
}