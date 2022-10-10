import React from "react";
import Headers from "../../organisms/Header/Headers";
import Template from "../../template/TemplatePage/templatePage";
import Footer from "../../organisms/Footer/Footer";
import BookDetailGrid from "../../organisms/BookDetailPage/BookDetailPage";


export default function BookDetailsPage() {
  return (
    <Template
      header={<Headers></Headers>}
      content={<BookDetailGrid />}
      footer={<Footer></Footer>}
    ></Template>
  );
}