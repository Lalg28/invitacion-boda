import Head from 'next/head'

const PageHead = ({ headTitle }) => {
  return (
  <>
  <Head>
    <title> {headTitle ? headTitle : "Wendola | Wedding & Planner React Nextjs Template"} </title>
    <link 
    href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700&family=Great+Vibes&display=swap" 
    rel="stylesheet" />
  </Head>
  </>
  )
}

export default PageHead