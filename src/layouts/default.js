import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader"
import { Outlet } from "react-router-dom"

function Default(){
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}

export default Default;