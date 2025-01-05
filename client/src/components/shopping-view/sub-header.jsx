import { useLocation, useNavigate, useSearchParams, Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { shoppingViewHeaderMenuItems } from "@/config";
import { Button } from "../ui/button";
import { UserCog } from "lucide-react";

export default function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "search"
        ? {
            category: [getCurrentMenuItem.id],
          }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    if (location.pathname.includes("listing") && currentFilter !== null) {
      setSearchParams(
        new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
      );
    } else {
      navigate(getCurrentMenuItem.path);
    }
  }

  return (
    <nav className="w-full bg-gray-900 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="px-6 py-2 bg-gray-800 text-gray-100 font-medium rounded-md shadow-md hover:bg-gray-700 transition-all">
              Categories
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="start"
            className="w-72 max-w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg"
          >
            {shoppingViewHeaderMenuItems.map((menuItem) => (
              <DropdownMenuItem
                key={menuItem.id}
                onClick={() => handleNavigate(menuItem)}
                className="cursor-pointer px-4 py-3 text-sm text-gray-200 hover:bg-gray-700 transition-all rounded-md"
              >
                {menuItem.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Remove Account and Home Links on Mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/shop/home"
              className="text-gray-200 text-sm font-medium hover:text-gray-100 transition-colors"
            >
              Home
            </Link>
            <Button
              variant="text"
              className="text-gray-200 text-sm font-medium hover:text-gray-100 transition-colors"
              onClick={() => navigate("/shop/account")}
            >
              <UserCog className="h-6 w-6" />
              <span className="text-xs">Account</span>
            </Button>
          </div>

          <Link
            to="/shop/about"
            className="text-gray-200 text-sm font-medium hover:text-gray-100 transition-colors"
          >
            About
          </Link>
          <Link
            to="/shop/contact"
            className="text-gray-200 text-sm font-medium hover:text-gray-100 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
