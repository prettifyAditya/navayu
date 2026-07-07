import Image from "next/image";
import FormWrapper from "../../organisms/FormWrapper";

export default function EnquireNow() {
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
            <FormWrapper classname="home-form" />
          </div>
        </div>
      </div>
    </div>
  );
}
