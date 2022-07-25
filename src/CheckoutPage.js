import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { formInputs } from "./data/formInputsData";
import CartProduct from "./CartProduct";
import FormComp from "./FormComp";

export default function CheckoutPage() {
  const addressForm = {
    city: formInputs.city,
    street: formInputs.street,
    zipcode: formInputs.zipcode,
  };
  return (
    <Container as={Card} className="p-5 my-3">
      <Row className="mx-5">
        <h2>Checkout</h2>
      </Row>
      <Row>
        <Col>
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </Col>
        <Col>
          <FormComp
            formTitle="Ship To"
            isCheckout={true}
            handleFormDetails={() => {}}
            formInputs={addressForm}
          />
          <h2 className="text-primary my-3 text-center">Summary $1200</h2>
          <div className="justify-content-center d-flex">
            <Button>Place Order</Button>
          </div>
        </Col>
      </Row>
      <Row md={2} className="justify-content-center d-flex"></Row>
    </Container>
  );
}
