import { useContext } from "react";
import About from "./Components/about/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/intro";
import ProductList from "./Components/ProductList/ProductList";
import Toggle from "./Components/Toggle/Toggle";
import { ThemeContext } from "./context";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};
export default App;
