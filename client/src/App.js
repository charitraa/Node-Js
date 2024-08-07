import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./counter";
import CounterFunctional from "./counter_functional";
import Index from "./components";
// import GreetComponent from "./components/props/greetComponent";
import { GreetRamComponent } from "./components/props/GreetRamComponent";
import { GreetRuchiComponent } from "./components/props/greetRuchiComponent";
import Navbar from "./components/Navbar/navbar";
import AboutComponent from "./components/About/aboutComponent";
import HomeComponent from "./components/Home/homeComponent";
import ShopComponent from "./components/Shop/shopComponent";
import FunctionalProps from "./components/Functional_Props/FunctionalProps";
import LifecycleComponent from "./components/react_lifecycle/lifecycleComponent";
import ProductComponent from "./components/Product/ProductComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import RegistrationForm from "./components/Register/RegisterComponent";
import LoginComponent from "./components/Login/LoginComponen";
import CategoryComponent from "./components/Category/CategoryComponent";
import AddProductComponent from "./components/AddProduct/AddProductComponent";

class App extends Component {
  render() {
    return (
      // <>
      // <Navbar/>
      //   <Counter/>
      //  <CounterFunctional/>
      //  <Index/>
      //  <GreetRamComponent/>
      //  <GreetRuchiComponent/>
      //  </>

      <Router>
        <div>
          <Navbar />
          {/* <FunctionalProps/> */}
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/shop" element={<ShopComponent />} />
            <Route path="/product" element={<ProductComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/signup" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/category" element={<CategoryComponent />} />
            <Route path="/addproduct" element={<AddProductComponent />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
