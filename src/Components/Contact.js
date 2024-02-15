import { useState } from "react";
import React from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="">
      <img
        src="https://img.freepik.com/premium-photo/website-internet-contact-us-page-concept-with-phone-chat-email-icons-symbol-telephone-mail-mobile-phone-website-page-contact-us-wide-web-banner-copy-space-blue-background_256259-2730.jpg"
        alt="contact-bg"
        className="absolute bg-cover bg-center w-screen h-screen"
      />
      <div className=" inset-0 flex flex-col items-center justify-center">
        <h1 className="  font-bold text-4xl uppercase font-serif z-10 text-white m-10">
          GET IN TOUCH
        </h1>
        <form className="text-center z-10" onSubmit={handleSubmit}>
          <div className="flex mb-5">
            <div className="ml-40">
              <input
                type="text"
                name="name"
                value={formData.name}
                className="border-2 border-black  block p-4 m-4 w-64"
                placeholder="Name"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="contact"
                value={formData.contact}
                className="border-2 border-black block p-4 m-4 w-64"
                placeholder="Contact"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                className="border-2 border-black block p-4 m-4 w-64"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                id="msg"
                placeholder="Message"
                onChange={handleInputChange}
                className="border-2 border-black p-2 m-4 w-96 h-52"
              />
            </div>
          </div>
          <button
            className="border-2 border-black rounded-lg p-2 text-center hover:scale-105"
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
