import { HousePlug, LogOut, Menu, ShoppingCart, UserCog, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";

function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/shop/search?q=${searchQuery}`);
  }

  useEffect(() => {
    dispatch(fetchCartItems(user?.id));
  }, [dispatch, user?.id]);

  return (
    <div className="flex lg:flex-row gap-4 lg:items-center justify-between w-full">
      {/* Cart Button */}
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button
          onClick={() => setOpenCartSheet(true)}
          variant="outline"
          size="icon"
          className="relative"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute top-[-5px] right-[2px] bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
            {cartItems?.items?.length || 0}
          </span>
          <span className="sr-only">User cart</span>
        </Button>
        <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={cartItems?.items || []}
        />
      </Sheet>

      {/* Search Bar Button (on smaller screens) */}
      <Button
        variant="outline"
        size="icon"
        className="lg:hidden"
        onClick={() => setIsSearchBarVisible(!isSearchBarVisible)}
      >
        <Search className="w-6 h-6" />
      </Button>

      {/* Search Bar on mobile */}
      {isSearchBarVisible && (
        <form
          className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[90%] max-w-[400px] px-4 py-3 bg-white shadow-lg flex flex-col items-center gap-2 border-t rounded-lg z-50"
          onSubmit={handleSearch}
        >
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-none focus:outline-none text-sm flex-1 w-full"
            placeholder="Search products..."
          />
          <Button type="submit" size="sm" className="w-full">
            Search
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsSearchBarVisible(false)}
            className="absolute top-2 right-2"
          >
            <span className="text-lg">×</span>
          </Button>
        </form>
      )}

      {/* Search Bar on larger screens */}
      <form
        className="hidden lg:flex items-center gap-2 bg-white px-4 py-2 border border-gray-200 rounded-lg"
        onSubmit={handleSearch}
      >
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-none focus:outline-none text-sm flex-1"
          placeholder="Search products..."
        />
        <Button type="submit" size="sm">
          Search
        </Button>
      </form>
    </div>
  );
}

function ShoppingHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/shop/home" className="text-primary flex items-center">
            <HousePlug className="h-6 w-6" />
            <span className="text-lg font-bold">Clean Mart</span>
          </Link>
        </div>

        {/* Align Cart and Search on the same row */}
        <div className="flex lg:flex-row gap-4 lg:items-center">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
}

function MobileFooterNavigation() {
  const navigate = useNavigate();

  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white shadow-md z-40">
      <div className="container mx-auto flex justify-around py-2">
        <Button variant="text" onClick={() => navigate("/shop/home")}>
          <HousePlug className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="text" onClick={() => navigate("/shop/listing")}>
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xs">Products</span>
        </Button>
        <Button variant="text" onClick={() => navigate("/shop/account")}>
          <UserCog className="h-6 w-6" />
          <span className="text-xs">Account</span>
        </Button>
      </div>
    </div>
  );
}

export default function ShoppingPage() {
  return (
    <>
      <ShoppingHeader />
      <MobileFooterNavigation />
    </>
  );
}
