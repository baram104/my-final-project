import ProductDetails from "./ProductDetails/ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MyAccount from "./MyAccount/MyAccount";
import FormComp from "./FormComp";
import { formInputs } from "./data/formInputsData";

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
      <Navbar />
      <ProductDetails id="1" isOnWishList={false} />
      {/* <MyAccount /> */}
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
