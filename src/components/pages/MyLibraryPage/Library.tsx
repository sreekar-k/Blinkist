import React from "react";
import Headers from "../../organisms/Header/Headers";
import Template from "../../template/TemplatePage/templatePage";
import MyLibrary from "../../atoms/MyLibrary/MyLibrary";
import Footer from "../../organisms/Footer/Footer";
import { Outlet } from "react-router-dom";
import MyLibraryToggle from "../../molecules/MyLibraryToggle/MyLibraryToggle";



export default function Library() 
{
  const [exploreClick, setExploreClick] = React.useState(false);
  const [active, setActive] = React.useState("finished");
  function handleChange() {
    setExploreClick(!exploreClick);
  }
  return (
    <Template
      header={
        <Headers ></Headers>
      }
      content={
        <>
          <MyLibrary>My Library</MyLibrary>

          <MyLibraryToggle
            active={active}
            setActive={(act) => setActive(act)}
          ></MyLibraryToggle>
          
          <Outlet />
          
        </>
      }
      footer={<Footer></Footer>}
    ></Template>
  );
}
