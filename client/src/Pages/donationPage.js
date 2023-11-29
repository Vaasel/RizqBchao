import "./donationPage.css";
import donation from '../assets/donation.png';
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Donation =()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div>
                  </div>
                </Form>
          </div>
        </div>
      </>
    );
}

export default Donation;