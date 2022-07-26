import ProductDetails from "./ProductDetails/ProductDetails";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";
import MyAccount from "./MyAccount/MyAccount";
import FormComp from "./FormComp";
import { formInputs } from "./data/formInputsData";
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import OrderSummaryPage from "./OrderSummaryPage";

function App() {
  const handleFormDetails = (details) => {
    console.log(details);
  };
  const loginFormInputs = {
    username: formInputs.username,
    password: formInputs.password,
  };
  const signUpFormInputs = {
    email: formInputs.email,
    usernameRegistration: formInputs.usernameRegistration,
    firstName: formInputs.firstName,
    lastName: formInputs.lastName,
    passwordRegistration: formInputs.passwordRegistration,
    confirmPassword: formInputs.confirmPassword,
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComp />
      {/* <ProductsPage></ProductsPage> */}
      {/* <ProductDetails id="2" isOnWishList={false} /> */}
      {/* <MyAccount /> */}
      {/* <CartPage /> */}
      {/* <CheckoutPage /> */}
      {/* <OrderSummaryPage /> */}
      <FormComp
        formTitle="Sign In"
        handleFormDetails={handleFormDetails}
        formInputs={loginFormInputs}
      />
      <FormComp
        formTitle="Sign Up"
        handleFormDetails={handleFormDetails}
        formInputs={signUpFormInputs}
      />
      <Footer />
    </div>
  );
}

export default App;
