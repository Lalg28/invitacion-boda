import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Countdown1 from "@/components/sections/Countdown1"
import CallToAction1 from "@/components/sections/CallToAction1"
import Clients1 from "@/components/sections/Clients1"
import Contact1 from "@/components/sections/Contact1"
import Couple1 from "@/components/sections/Couple1"
import Event1 from "@/components/sections/Event1"
import Services1 from "@/components/sections/Services1"
import { SnackbarProvider } from "notistack"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { guestList } from "@/utils/guestsList"

export default function Home({ guest }) {
  return (
    <>
      <SnackbarProvider>
        <Layout headerStyle={1} footerStyle={1}>
          <Banner1 />
          <Countdown1 />
          <Couple1 />
          <Event1 />
          <Services1 />
          <CallToAction1 guest={guest} />
          <Contact1 guest={guest} />
          <Clients1 />
        </Layout>
      </SnackbarProvider>
    </>
  )
}

export async function getServerSideProps(context) {
  const { guest: guestId } = context.query
  
  const guestInfo = guestList.filter((guest) => guest.id === guestId)

  if (guestInfo.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      guest: guestInfo[0],
    },
  }
}