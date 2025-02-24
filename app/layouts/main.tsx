import { Outlet } from "react-router";

import Footer from '../components/navs/footer.tsx'
import Header from '../components/navs/header.tsx';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}