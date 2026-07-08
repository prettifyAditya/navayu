"use client";
import { useState } from "react";
import Select from "../atoms/Select";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function FormWrapper({ classname = "" }) {
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
    <div className={`form form-grid ${classname}`}>
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
        {classname === "white" ? (
          <Button variant="btn-white" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button variant="btn-gradient-a" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}
