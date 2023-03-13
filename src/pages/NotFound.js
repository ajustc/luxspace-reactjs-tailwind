import React from "react";

import Header from "./../parts/Header";
import Sitemap from "./../parts/Sitemap";
import Footer from "./../parts/Footer";
import PageErrorMessage from "./../parts/PageErrorMessage";
import Document from './../parts/Document';

export default function NotFound() {
  return (
    <Document>
      <Header theme="black" position />

      <PageErrorMessage />

      <Sitemap />
      <Footer />
    </Document>
  );
}
