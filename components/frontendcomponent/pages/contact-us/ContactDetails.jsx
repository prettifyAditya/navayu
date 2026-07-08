"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Textarea from "../../atoms/Textarea";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

export default function ContactDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section>
      <div className="contact_details sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="colA">
              <div className="heading">
                <h2>Connect With Our Healthcare Experts</h2>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <Image
                      src="/icon/location.svg"
                      alt="location"
                      width={35}
                      height={35}
                    />
                  </div>
                  <div className="info">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the..
                    </p>
                    <Button variant="btn-border-white">
                      Get Directions{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097c-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163L254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475s35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"
                        ></path>
                      </svg>
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      src="/icon/mail.svg"
                      alt="mail"
                      width={35}
                      height={35}
                    />
                  </div>
                  <div className="info">
                    <Link href="mailto:info@navayu.com">info@navayu.com</Link>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Image
                      src="/icon/phone.svg"
                      alt="phone"
                      width={35}
                      height={35}
                    />
                  </div>
                  <div className="info">
                    <Link href="tel:+919217373153">+91 9217-373-153</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="form white">
              <div className="form-grid">
                <Input
                  label="Name *"
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email *"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Phone *"
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Textarea
                  label="Message"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="disclam">
                <input type="checkbox" name="" id="" />
                <div className="in-bx"></div>
                <p>
                  I consent to the collection and processing of my personal data
                  in accordance with the DPDP Act, 2023 and the company's
                  Privacy Policy.
                </p>
              </div>
              <div className="submit-grp">
                <Button variant="btn-white" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
