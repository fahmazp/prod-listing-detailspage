import React from "react";
import { Link } from "react-router-dom";

function Products({ products }) {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6 my-10">
      <h1 className="text-center text-3xl bg-gradient-to-r from-rose-900 to-indigo-400 bg-clip-text font-bold text-transparent">
        New Arrivals
      </h1>

      <div className="flex flex-wrap gap-3 justify-center max-sm:items-center">
        {products.map((product) => (
          <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200
           rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-4"
          >
            <a href="#">
              <img
                className="p-6 rounded-t-lg w-full h-72 object-contain rounded-2xl"
                src={product.image}
                alt={product.title}
              />
            </a>
            <div className="px-5 pb-3">
              <a href="#">
                <h5 className="text-lg font-semibold text-center tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>

              <div className="flex items-center justify-center gap-3 mt-1">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                  {product.rating?.rate || "N/A"}
                </span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
              </div>

              <div className="flex mt-4 md:mt-6 justify-center">

              <Link to = {`./productDetails/${product.id}`}>
              <button
                className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-gray-900 focus:outline-none
                  bg-amber-400/50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4
                  focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-blue-600
                   dark:hover:text-white dark:hover:bg-gray-700 shadow-md"
                >View more
              </button>
              </Link>

                <a href="#"
                  className="py-2 px-8 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800
                   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md"
                >Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;
