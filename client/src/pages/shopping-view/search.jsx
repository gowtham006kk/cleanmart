import ProductDetailsDialog from "@/components/shopping-view/product-details";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useToast } from "@/components/ui/use-toast";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { fetchProductDetails } from "@/store/shop/products-slice";
import { getSearchResults, resetSearchResults } from "@/store/shop/search-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function SearchProducts() {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { searchResults, loading } = useSelector((state) => state.shopSearch);
  const { productDetails } = useSelector((state) => state.shopProducts);
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { toast } = useToast();

  const keyword = searchParams.get("q") || "";

  useEffect(() => {
    if (keyword && keyword.trim().length > 3) {
      dispatch(getSearchResults(keyword));
    } else {
      dispatch(resetSearchResults());
    }
  }, [keyword, dispatch]);

  // Add product to cart handler
  function handleAddtoCart(getCurrentProductId, getTotalStock) {
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getTotalStock} quantity can be added for this item`,
            variant: "destructive",
          });
          return;
        }
      }
    }

    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product added to cart",
        });
      }
    });
  }

  // Fetch product details for dialog
  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  // Open dialog when product details are fetched
  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Empty State */}
      {!loading && !searchResults.length && keyword.trim().length > 0 && (
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-gray-800">No results found for "{keyword}"</h1>
          <p className="text-lg text-gray-600">Try a different search or check out related products below.</p>
        </div>
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center my-8">
          <div className="spinner-border animate-spin border-t-2 border-primary w-10 h-10 mx-auto border-solid rounded-full" />
          <p className="mt-4 text-lg text-gray-600">Searching for products...</p>
        </div>
      )}

      {/* Search Results */}
      {!loading && searchResults.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResults.map((item) => (
              <ShoppingProductTile
                key={item.id}
                handleAddtoCart={handleAddtoCart}
                product={item}
                handleGetProductDetails={handleGetProductDetails}
              />
            ))}
          </div>
        </div>
      )}

      {/* Product Details Dialog */}
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default SearchProducts;
