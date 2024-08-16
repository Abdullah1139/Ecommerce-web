import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import LoginForm from "./Login";
import Product from "./Product";
import Cart from "./cart";
// import Catalog from "./catalog";
import AddProduct from "./AddProduct";
import RegistrationForm from "./registration";
import Footer from "./footer";
import Services from "./Services";

const Navigator=()=>{
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Product/>}/>
                {/* <Route path="catalog" element={<Catalog/>}/> */}
                <Route path="login" element={<LoginForm/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="addproduct" element={<AddProduct/>}/>
                <Route path="register" element={<RegistrationForm/>}/>
                {/* <Route path="service" element={<Services/>}/> */}

            </Routes>
            <Footer/>
        </div>
    )
}
export default Navigator;