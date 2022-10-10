import  React from "react";
import FullBanner from "../../molecules/FullBanner/FullBanner";
import Headers from "../../organisms/Header/Headers";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import Template from "../../template/TemplatePage/templatePage";
import TrendingGrid from "../../organisms/Entrepreneurship/Entrepreneurship";
import Footer from "../../organisms/Footer/Footer";


export default function Entrepreneur() {
  
  return (
    <Template
      header={
        <Headers ></Headers>
      }
      content={
        <>
          <FullBanner />
          <SearchBar />
          <TrendingGrid />
        </>
      }
      footer={<Footer></Footer>}
    ></Template>
  );
}
