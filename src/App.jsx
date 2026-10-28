import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import FetchExample from "./components/FetchExample";
import Optimization from "./components/Optimization";
import Parent from "./components/Parent";
import Products from "./components/Products";
import ReduxCounter from "./components/ReduxCounter";
import RegisterForm from "./components/RegisterForm";
import ThemeExample from "./components/ThemeExample";

import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { ThemeProvider } from "./context/ThemeContext";



function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />

        <Footer />

        <Parent />

        <Counter/>

        <Home />

        <Contact />

        <Products />

        <FetchExample />

        <Optimization />

        <RegisterForm />

        <ReduxCounter />

        <ThemeExample />
      </div>
    </ThemeProvider>
  );
}

export default App;
