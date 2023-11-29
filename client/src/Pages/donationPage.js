import "./donationPage.css";
import donation from '../assets/donation.png';
import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import Button from "../components/button";

const Donation =()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
      <>
        <div className="Donate-1">
          <div className="Donate-1-1">
            <img src={donation} alt="DonationImage"></img>
          </div>
          <div>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h1>Sign Up</h1>
                </Card.Title>
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
                    <Button text={["Sign Up"]} />
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
}

export default Donation;