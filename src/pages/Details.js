import React from "react";

import Header from "./../parts/Header";
import Breadcrumb from "./../components/Breadcrumbs/index";
import ProductDetails from "./../parts/Details/ProductDetails";
import Suggestions from "./../parts/Details/Suggestions";
import Sitemap from "./../parts/Sitemap";
import Footer from "./../parts/Footer";
export default function Details(props) {
  return (
    <>
      <Header theme="black" position />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/19231", name: "Office Room" },
          { url: "/categories/19231/products/1444", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestions />
      <Sitemap />
      <Footer />
    </>
  );
}
