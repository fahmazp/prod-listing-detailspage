import React from "react"
import { Outlet } from "react-router";
import Navbar from "../navbar";
import Footer from "../footer";

function Root() {
  return (
    <div>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Root