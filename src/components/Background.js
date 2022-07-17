import {Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Background() {
    return (
        <Card style={{ width: "auto", minHeight: "428px" }} className="bg-dark text-black">
          <Card.Img src="https://d2d8wwwkmhfcva.cloudfront.net/2880x/www.instacart.com/assets/homepage/homepage_background_compressed-f86db4915ed64a3bdeab5e635ec9d995d63952f1d5e6b17031b49acd2c0f250e.jpg" style={{height:"600px",width:"auto"}} alt="Card image" />
          <Card.ImgOverlay>
          <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                        Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1em" }}>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="   Enter your address" />
                        </Form.Group>
                    </Form>
          </Card.ImgOverlay>
        </Card>
      );
    }
