import { useState } from "react";
import HaberPanosu from "./components/HaberPanosu";
import Haberler from "./components/Haberler";
import Navbar from "./components/Navbar";

const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <HaberPanosu category={category}/>
      <Haberler/>
    </div>
  );
};

export default App;
