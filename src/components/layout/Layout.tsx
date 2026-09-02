import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="aura-shell">
      <div className="aura-layer-1" aria-hidden="true" />
      <div className="aura-layer-2" aria-hidden="true" />
      <div className="aura-layer-3" aria-hidden="true" />
      <div className="aura-layer-4" aria-hidden="true" />
      <div className="aura-layer-5" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout