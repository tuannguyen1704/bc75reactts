import { Outlet } from "react-router-dom"
import Header from "./HomePage/_components/Header"
export default function index() {
  return (
    <>
        <Header/>
        <Outlet />
        <footer>Footer</footer>

    </>
  )
}
