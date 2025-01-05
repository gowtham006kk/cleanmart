import  { useState } from "react";
import { Link } from "react-router-dom";
import { shoppingViewHeaderMenuItems } from "@/config";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

function Category() {
  const [isCategoryActive, setIsCategoryActive] = useState(false);

  return (
    <div className="lg:flex hidden flex-wrap gap-4">
      {/* Desktop Category List */}
      <nav className="flex flex-wrap gap-6">
        {shoppingViewHeaderMenuItems.map((menuItem) => (
          <Link
            to={menuItem.path}
            key={menuItem.id}
            className="text-sm font-medium text-gray-800 hover:text-primary transition-colors"
          >
            {menuItem.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Category Slider */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsCategoryActive(true)}
            >
              Categories
            </Button>
          </SheetTrigger>
          <SheetContent side="left" open={isCategoryActive} onClose={() => setIsCategoryActive(false)} className="w-72">
            <div className="flex flex-col gap-6">
              {shoppingViewHeaderMenuItems.map((menuItem) => (
                <Link
                  to={menuItem.path}
                  key={menuItem.id}
                  className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
                  onClick={() => setIsCategoryActive(false)}
                >
                  {menuItem.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Category;
