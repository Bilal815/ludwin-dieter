import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Shop from './components/Shop/Shop'
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ResetPasswordLink from "./components/ResetPasswordLink/ResetPasswordLink";
import PasswordResetSuccessfully from "./components/PasswordResetSuccessfully/PasswordResetSuccessfully";
import MyAccount from "./components/MyAccount/MyAccount";
import FAQ from "./components/Pages/FAQ/FAQ";
import Reviews from "./components/Pages/Reviews/Reviews";
import Contact from "./components/Pages/Contact/Contact";
import About from "./components/Pages/About/About";
import Blogs from "./components/Blogs/Blogs";
import BlogDetails from "./components/Blogs/BlogDetails/BlogDetails";
import ProductCategory from "./components/ProductCategory/ProductCategory";


function App() {
  return (
    <>

      <Container>
        <Header />
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product-cat" element={<ProductCategory />} />
        <Route path="*" element={<NotFound />} />
        <Route path="single-product" element={ <ProductDetails />} />
        <Route path="cart" element={ <Cart />} />
        <Route path="checkout" element={ <Checkout />} />
        <Route path="sign-up" element={ <SignUp />} />
        <Route path="sign-in" element={ <SignIn />} />
        <Route path="forgot-password" element={ <ForgotPassword />} />
        <Route path="reset-password" element={ <ResetPassword />} />
        <Route path="reset-password-link" element={ <ResetPasswordLink />} />
        <Route path="password-reset-succesfully" element={ <PasswordResetSuccessfully />} />
        <Route path="my-account" element={ <MyAccount />} />
        <Route path="faqs" element={ <FAQ />} />
        <Route path="reviews" element={ <Reviews />} />
        <Route path="contact-us" element={ <Contact />} />
        <Route path="about-us" element={ <About />} />
        <Route path="blogs" element={ <Blogs />} />
        <Route path="blog-detail" element={ <BlogDetails />} />
      </Routes>
     
      <Footer />
      </>
  );
}

export default App;
