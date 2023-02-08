import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer greeting={"¡Tenemos para ofrecerte la mayor variedad de alimentos del mercado!"}/>
    </div>
  );
}

export default App;