import Link from "next/link";

export default function Menu2() {

  return (
  <>
  <ul className="navigation">
    <li className="current dropdown"><Link href="/">Home</Link>
      <ul>
        <li><Link href="/">Home page 01</Link></li>
        <li><Link href="/index-2">Home page 02</Link></li>
        <li><Link href="/index-3">Home page 03</Link></li>
        <li><Link href="/index-4">Home page 04</Link></li>
        <li><Link href="/index-5">Home page 05</Link></li>
        <li className="dropdown"> <Link href="#">Invitation</Link>
          <ul>
            <li><Link href="index-invitation">Style One</Link></li>
            <li><Link href="index-invitation2">Style Two</Link></li>
            <li><Link href="index-invitation3">Style Three</Link></li>
            <li><Link href="index-invitation4">Style Four</Link></li>
          </ul>
          <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
        </li>
      </ul>
    </li>
    <li><Link href="/page-our-story">Story</Link></li>
    <li><Link href="/page-gallery">Gallery</Link></li>
    <li className="logo"><Link href="/"><img src="/images/logo-2.png" alt="" title="Wendola"/></Link></li>
    <li><Link href="/page-our-timeline">Timeline</Link></li>
    <li><Link href="/news-grid">News</Link></li>
    <li><Link href="/page-rsvp">RSVP</Link></li>
  </ul>
  </>
  )
}
