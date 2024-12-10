import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-orange">About Us</h1>
        <p className="lead">
          At ByteCity Tech Solutions, we pride ourselves on delivering
          cutting-edge technology solutions tailored to your unique needs.
        </p>
      </div>

      <div className="row">
        {/* Agwata's Profile */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Agwata</h3>
              <h5 className="text-muted">Co-Founder and Tech Strategist</h5>
              <p>
                Agwata brings a wealth of expertise as a web designer, virtual
                assistant, technical support specialist, and certified
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

        {/* Dolphine's Profile */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Dolphine</h3>
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

      <div className="text-center mt-5">
        <h2 className="text-orange">Meet Our Team</h2>
        <p>
          Our team of experts is dedicated to innovation and efficiency,
          delivering solutions that exceed client expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
