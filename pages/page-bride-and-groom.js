import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import BrideGrooms from "@/components/sections/innerpages/BrideGrooms"


export default function PageBrideGrooms() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Our BrideGrooms" />
    <BrideGrooms />

    </Layout>
    </>
  )
}