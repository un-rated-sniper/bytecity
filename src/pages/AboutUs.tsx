import React from "react";
import AboutUsHeader from "../components/AboutUsHeader";

const AboutUs: React.FC = () => {
  return (
    <div>
      <AboutUsHeader /> {/* Hero Header */}
      
      {/* Section 1: About Us */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="text-warning fw-bold">About Us</h2>
          <p className="lead">
            At ByteCity Tech Solutions, we pride ourselves on delivering
            cutting-edge technology solutions tailored to your unique needs.
          </p>
        </div>
      </div>

      {/* Section 2: Meet the Team */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-warning fw-bold">Meet Our Team</h2>
            <p>
              Our team of experts is dedicated to innovation and efficiency,
              delivering solutions that exceed client expectations.
            </p>
          </div>

          <div className="row">
            {/* Agwata's Profile */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card shadow-sm h-100">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="./aboutUs/agwata-image.jpg" // Replace with actual image path
                      alt="Agwata"
                      className="img-fluid rounded-start h-100 object-fit-cover"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title text-warning">Agwata</h3>
                      <h5 className="text-muted">Co-Founder and Tech Strategist</h5>
                      <p>
                        Agwata brings a wealth of expertise as a web designer,
                        virtual assistant, technical support specialist, and certified
                        Pythonist. With certifications in AWS Cloud Practitioner,
                        Ethical Hacking, and Software Engineering, Agwata has a solid
                        foundation in cutting-edge technology and cybersecurity.
                      </p>
                      <p>
                        Passionate about leveraging technology to solve complex
                        challenges, Agwata excels in ICT consultancy, system sourcing,
                        and creative branding, ensuring ByteCity delivers world-class
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dolphine's Profile */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card shadow-sm h-100">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="./aboutUs/dee-image.jpg" // Replace with actual image path
                      alt="Dolphine"
                      className="img-fluid rounded-start h-100 object-fit-cover"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title text-warning">Dolphine</h3>
                      <h5 className="text-muted">Designer and Creative Visionary</h5>
                      <p>
                        Dolphine is a certified Adobe designer with over 5 years of
                        professional experience in branding, designing, printing, and
                        signage. Her background in Arts and Graphic Design has equipped
                        her with a blend of technical expertise and artistic vision.
                      </p>
                      <p>
                        She specializes in crafting logos, building brand identities,
                        and creating captivating promotional materials, making her a
                        standout in the creative industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ethanus' Profile */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card shadow-sm h-100">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="./aboutUs/ethanus-image.jpg" // Replace with actual image path
                      alt="Ethanus"
                      className="img-fluid rounded-start h-100 object-fit-cover"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title text-warning">Ethanus</h3>
                      <h5 className="text-muted">Professional Writer and Blogger</h5>
                      <p>
                        Ethanus is a highly skilled writer with over a decade of
                        experience in creating impactful blogs, technical documents,
                        and professional content. His expertise in storytelling and
                        research-driven writing sets him apart in the content creation
                        industry.
                      </p>
                      <p>
                        As a dedicated trainer in professional writing, Ethanus has
                        mentored numerous individuals and teams, helping them
                        communicate effectively and build compelling narratives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinton's Profile */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card shadow-sm h-100">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="./aboutUs/clinton-image.jpg" // Replace with actual image path
                      alt="Clinton"
                      className="img-fluid rounded-start h-100 object-fit-cover"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title text-warning">Clinton</h3>
                      <h5 className="text-muted">Professional Photographer and Social Media Icon</h5>
                      <p>
                        Clinton is a world-class photographer, celebrated with three
                        Grammy awards for his outstanding contributions to the creative
                        arts. His ability to capture timeless moments and deliver
                        visually stunning content makes him a true master of his craft.
                      </p>
                      <p>
                        A TikTok and Instagram professional, Clinton leverages social
                        media platforms to inspire and connect with millions, blending
                        creativity with storytelling to create unforgettable experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
