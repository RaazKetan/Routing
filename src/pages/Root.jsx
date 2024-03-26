import {Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function RootLayout() {
  return (
    <>
        <MainNavigation/>
        <main className>
        <Outlet/>
        </main>
    </>
  );
}
export default RootLayout;