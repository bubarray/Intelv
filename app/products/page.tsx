"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, List, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";

const categories = [
  "All Products",
  "Engine Parts",
  "Transmission",
  "Brakes",
  "Suspension",
  "Electrical",
  "Body Parts",
  "Accessories",
];

const products = [
  {
    id: 1,
    name: "Premium Brake Pad Set",
    price: 89.99,
    originalPrice: 119.99,
    image: "/api/placeholder/300/300",
    category: "Brakes",
    inStock: true,
    tags: ["Premium", "Fast Shipping"],
  },
  {
    id: 2,
    name: "High Performance Air Filter",
    price: 45.99,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    category: "Engine Parts",
    inStock: true,
    tags: ["High Performance"],
  },
  {
    id: 3,
    name: "LED Headlight Assembly",
    price: 299.99,
    originalPrice: 399.99,
    image: "/api/placeholder/300/300",
    category: "Electrical",
    inStock: false,
    tags: ["LED", "Best Seller"],
  },
  {
    id: 4,
    name: "Shock Absorber Pair",
    price: 189.99,
    originalPrice: 249.99,
    image: "/api/placeholder/300/300",
    category: "Suspension",
    inStock: true,
    tags: ["Premium", "Pair"],
  },
  {
    id: 5,
    name: "Engine Oil Filter",
    price: 24.99,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    category: "Engine Parts",
    inStock: true,
    tags: ["Essential"],
  },
  {
    id: 6,
    name: "Transmission Fluid Pump",
    price: 129.99,
    originalPrice: 169.99,
    image: "/api/placeholder/300/300",
    category: "Transmission",
    inStock: true,
    tags: ["Professional Grade"],
  },
];

export default function Products() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilters, setPriceFilters] = useState<string[]>([]);

  // Handle URL parameters for category selection
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter products based on search, category, and price
  const getFilteredProducts = () => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Filter by category
    if (selectedCategory !== "All Products") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price ranges
    if (priceFilters.length > 0) {
      filtered = filtered.filter((product) => {
        return priceFilters.some((range) => {
          switch (range) {
            case "under-50":
              return product.price < 50;
            case "50-100":
              return product.price >= 50 && product.price <= 100;
            case "100-200":
              return product.price >= 100 && product.price <= 200;
            case "over-200":
              return product.price > 200;
            default:
              return true;
          }
        });
      });
    }

    return filtered;
  };

  // Sort products
  const getSortedProducts = (productsToSort: typeof products) => {
    const sorted = [...productsToSort];

    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted;
    }
  };

  const filteredProducts = getSortedProducts(getFilteredProducts());

  const handlePriceFilterChange = (range: string, checked: boolean) => {
    if (checked) {
      setPriceFilters([...priceFilters, range]);
    } else {
      setPriceFilters(priceFilters.filter((r) => r !== range));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-[#231D97] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-4 tracking-tight">
              Spare Parts Marketplace
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover premium automotive parts from trusted suppliers worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search spare parts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-white text-gray-600"}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-white text-gray-600"}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Categories */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={priceFilters.includes("under-50")}
                      onChange={(e) =>
                        handlePriceFilterChange("under-50", e.target.checked)
                      }
                    />
                    Under $50
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={priceFilters.includes("50-100")}
                      onChange={(e) =>
                        handlePriceFilterChange("50-100", e.target.checked)
                      }
                    />
                    $50 - $100
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={priceFilters.includes("100-200")}
                      onChange={(e) =>
                        handlePriceFilterChange("100-200", e.target.checked)
                      }
                    />
                    $100 - $200
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={priceFilters.includes("over-200")}
                      onChange={(e) =>
                        handlePriceFilterChange("over-200", e.target.checked)
                      }
                    />
                    Over $200
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-medium text-gray-900">
                {selectedCategory} ({filteredProducts.length} items)
              </h2>
            </div>

            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <div
                    className={`${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}
                  >
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <div className="text-gray-400 text-6xl">📦</div>
                    </div>
                  </div>

                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                        {product.name}
                      </h3>
                      {!product.inStock && (
                        <span className="text-sm text-red-600 font-medium">
                          Out of Stock
                        </span>
                      )}
                    </div>

                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-medium text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-[#BE6E1E] hover:bg-[#BE6E1E]/90"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
