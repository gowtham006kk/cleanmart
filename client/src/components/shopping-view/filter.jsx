import { filterOptions } from "@/config";
import { Fragment, useState } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

function ProductFilter({ filters, handleFilter }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Handle category expansion (toggle Show More / Show Less)
  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="bg-white h-auto rounded-lg shadow-lg border border-gray-200">
      <div className="p-5 border-b sm:border-b-0 sm:mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Filter Products</h2>
        <p className="text-sm text-gray-500 mt-1">
          Refine your search by selecting categories below.
        </p>
      </div>
      <div className="p-5 space-y-6">
        {Object.keys(filterOptions).map((keyItem, index) => (
          <Fragment key={keyItem}>
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCategory(keyItem)}
              >
                <h3 className="text-lg font-medium text-gray-700">{keyItem}</h3>
                <Button
                  variant="text"
                  size="sm"
                  className="text-indigo-600"
                >
                  {expandedCategory === keyItem ? "Show Less" : "Show More"}
                </Button>
              </div>
              <div
                className={`grid gap-3 mt-3 transition-all ${
                  expandedCategory === keyItem ? "block" : "hidden"
                }`}
              >
                {filterOptions[keyItem].map((option) => (
                  <Label
                    key={option.id}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <Checkbox
                      checked={
                        filters &&
                        Object.keys(filters).length > 0 &&
                        filters[keyItem] &&
                        filters[keyItem].indexOf(option.id) > -1
                      }
                      onCheckedChange={() => handleFilter(keyItem, option.id)}
                      className="border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-sm">{option.label}</span>
                  </Label>
                ))}
              </div>
            </div>
            {index < Object.keys(filterOptions).length - 1 && (
              <Separator className="mt-4" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
