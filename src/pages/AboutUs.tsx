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
                      <h5 className="text-muted">
                        Co-Founder and Tech Strategist
                      </h5>
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
                      <h5 className="text-muted">
                        Designer and Creative Visionary
                      </h5>
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

            {/* Athanus's Profile */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card shadow-sm h-100">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="./aboutUs/athanus-image.jpg" // Replace with actual image path
                      alt="Athanus"
                      className="img-fluid rounded-start h-100 object-fit-cover"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title text-warning">Athanus</h3>
                      <h5 className="text-muted">
                        Professional Writer, Blogger, and Trainer
                      </h5>
                      <p>
                        Athanus is an experienced writer and professional blogger
                        with a passion for storytelling and technical accuracy.
                        He is also a seasoned trainer in professional writing,
                        helping clients articulate their ideas effectively.
                      </p>
                      <p>
                        With years of experience in creative and technical writing,
                        Athanus ensures that every project ByteCity handles meets the
                        highest standards of quality and clarity.
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
                      <h5 className="text-muted">
                        Professional Photographer and Content Creator
                      </h5>
                      <p>
                        Clinton is a Grammy award-winning photographer with three
                        accolades under his belt. A professional TikToker and
                        Instagram content creator, he has an eye for capturing
                        moments that resonate with audiences globally.
                      </p>
                      <p>
                        His photography skills and social media expertise make him an
                        invaluable asset to ByteCity, crafting compelling visual
                        narratives for our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Victor's Profile */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card shadow-sm h-100">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="./aboutUs/victor-image.jpg" // Replace with actual image path
                      alt="Victor"
                      className="img-fluid rounded-start h-100 object-fit-cover"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title text-warning">Victor</h3>
                      <h5 className="text-muted">
                        Graphic Designer and Professional Trainer
                      </h5>
                      <p>
                        Victor is a seasoned graphic designer with years of
                        professional experience in creating impactful visuals. He is
                        also a dedicated trainer, mentoring aspiring designers in the
                        art of creating compelling digital content.
                      </p>
                      <p>
                        His expertise in branding, visual storytelling, and training
                        ensures ByteCity delivers exceptional creative solutions for
                        clients.
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
