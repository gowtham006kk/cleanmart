import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import MenuItems from "./sub-header"
function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
      <MenuItems />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default ShoppingLayout;
