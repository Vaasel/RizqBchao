import "./donationPage.css";
import donation from '../assets/donation.png';
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const Donation =()=>{

    const [pickup, setPickup] = useState("");
    const [food, setFood] = useState("");
    const [prefTime, setPrefTime] = useState("");
    const [quantity, setQuantity] = useState("");
    const [pic, setPic] = useState([]);

    const createDonation = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/food/create",
          {
            pickup,
            food,
            quantity,
            prefTime,
          }
        );

        if (response.status === 200) {
          // Registration successful, you can redirect or perform other actions here.
          console.log("Registration successful");
        } else {
          // Handle registration failure, e.g., display an error message.
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };


    return (
      <>
        <div className="Donate-1">
          <div>
            <img
              className="Donate-1-1"
              src={donation}
              alt="DonationImage"
            ></img>
          </div>
          <div className="Donate-1-2">
            <Form>
              <Form.Group>
                <Form.Label>Pickup where?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g; .... Town"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Food Item</Form.Label>
                <Form.Control
                  type="text"
                  value={food}
                  placeholder="e.g; Pasta"
                  onChange={(e) => setFood(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Preferred Time</Form.Label>
                <Form.Control
                  type="time"
                  value={prefTime}
                  placeholder="12:00 PM"
                  onChange={(e) => setPrefTime(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={quantity}
                  placeholder="0"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Small file input example</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => {
                    const [file] = e.target.files;
                    setPic((pic) => [...pic, file]);
                  }}
                />
              </Form.Group>
              <div>
                <button onClick={createDonation}>Done</button>
              </div>
            </Form>
          </div>
        </div>
      </>
    );
}

export default Donation;