import Image from "next/image";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import Textarea from "../../atoms/Textarea";
import { useState } from "react";
import Button from "../../atoms/Button";

export default function EnquireNow() {
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
    <div className="enquire_now sec-pad-all">
      <div className="container">
        <div className="main_wrapper flex">
          <figure>
            <Image
              src="/image/home/enquire-img.png"
              width={590}
              height={420}
              alt="Enquire Image"
            ></Image>
          </figure>
          <div className="form_wrapper">
            <div className="heading">
              <h2>Enquire Now for Expert Non-Surgical Care</h2>
            </div>
            <div className="form">
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
              </div>
              <div className="btn_wrap">
                <Button variant="btn-gradient-a">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
