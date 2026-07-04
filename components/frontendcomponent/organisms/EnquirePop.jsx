"use client";
import { useState } from "react";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";
import { useSelector } from "react-redux";
import { useModal } from "@/hooks/useModal";

export default function EnquirePop() {
  const { isModal } = useSelector((state) => state.modal);
  const { closeModal } = useModal();
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
    <div
      className={`model enquire-pop ${isModal === "enquirePop" ? "is-open" : ""}`}
    >
      <button className="close" onClick={() => closeModal()}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="model-body">
        <div className="title">
          <h4>Enquire Now</h4>
          <p>Share your details and our team will be in touch shortly.</p>
        </div>
        <div className="form form-grid">
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
          <Select
            label="Select Treatments"
            name="treatment"
            id="treatment"
            value={formData.treatment}
            onChange={handleChange}
            options={[
              { value: "Treatment 1", label: "Treatment 1" },
              { value: "Treatment 2", label: "Treatment 2" },
              { value: "Treatment 3", label: "Treatment 3" },
            ]}
            required
          />
          <Textarea
            classname="full"
            label="Message"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="sbmt-grp full">
            <Button variant="btn-gradient-a">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
