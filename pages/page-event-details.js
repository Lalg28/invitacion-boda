import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import EventDetails from "@/components/sections/innerpages/EventDetails"


export default function PageEventDetails() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="Event Details" />
    <EventDetails />

    </Layout>
    </>
  )
}