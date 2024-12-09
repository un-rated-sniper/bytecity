import React, { useState } from "react";
import Hero from "../components/Hero";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic here
    console.log("Form Submitted", formData);
  };

  return (
    <div>
      <Hero
        onHireUsClick={() => {
          /* handle hire us click */
        }}
      />
      <div className="container py-5">
        <div className="row">
          {/* Contact Form Section */}
          <div className="col-lg-6 mb-4">
          <h5 className="text-warning">Contct Us </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="col-lg-6 mb-4">
          <h5 className="text-warning">Get In Touch</h5>
            
            <p>
              <strong>Address:</strong> 123 ByteCity Tech Lane, City, Country
            </p>
            <p>
              <strong>Phone:</strong> +254 777 439 049
            </p>
            <p>
              <strong>Email:</strong> info@bytecitytech.com
            </p>

            {/* Optional: Social Media Links */}
            <div className="d-flex">
              <a href="#" className="text-dark me-3">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="#" className="text-dark me-3">
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a href="#" className="text-dark me-3">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
