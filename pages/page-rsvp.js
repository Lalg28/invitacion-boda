import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import RsvpVideo from "@/components/sections/innerpages/RsvpVideo"


export default function PageRsvpVideo() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={3}>

    <PageTitle pageName="RSVP" />
    <RsvpVideo />

    </Layout>
    </>
  )
}