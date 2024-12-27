import React from "react";
import AboutUsHeader from "../components/AboutUsHeader";

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      image: "./aboutUs/agwata-image.jpg",
      name: "Agwata",
      profession: "Co-Founder and Tech Strategist",
      bio: `
        Agwata brings a wealth of expertise as a web designer, virtual assistant,
        technical support specialist, and certified Pythonist. With certifications
        in AWS Cloud Practitioner, Ethical Hacking, and Software Engineering, 
        Agwata excels in ICT consultancy, system sourcing, and creative branding.
      `,
    },
    {
      image: "./aboutUs/dee-image.jpg",
      name: "Dolphine",
      profession: "Designer and Creative Visionary",
      bio: `
        Dolphine is a certified Adobe designer with over 5 years of professional
        experience in branding, designing, printing, and signage. She specializes
        in crafting logos, building brand identities, and creating captivating 
        promotional materials.
      `,
    },
    {
      image: "./aboutUs/athanus-image.jpg",
      name: "Athanus",
      profession: "Professional Writer, Blogger, and Trainer",
      bio: `
        Athanus is an experienced writer and professional blogger with a passion
        for storytelling and technical accuracy. He is also a seasoned trainer in
        professional writing, helping clients articulate their ideas effectively.
      `,
    },
    {
      image: "./aboutUs/clinton-image.jpg",
      name: "Clinton",
      profession: "Professional Photographer and Content Creator",
      bio: `
        Clinton is a Grammy award-winning photographer with three accolades. A 
        professional TikToker and Instagram content creator, he captures moments
        that resonate globally.
      `,
    },
    {
      image: "./aboutUs/victor-image.jpg",
      name: "Victor",
      profession: "Graphic Designer and Trainer",
      bio: `
        Victor is a seasoned graphic designer with years of experience in creating
        impactful visuals. He is also a dedicated trainer mentoring aspiring
        designers.
      `,
    },
    {
      image: "./aboutUs/agripa-image.jpg",
      name: "Agripa",
      profession: `
        Social Media Manager, Virtual Assistant, Business Branding Specialist,
        Customer Support Specialist, Telephony Specialist
      `,
      bio: `
        Agripa is a multifaceted professional specializing in social media 
        management, virtual assistance, and customer support. As a team manager 
        and telephony specialist, Agripa ensures smooth operations while delivering 
        exceptional branding experiences.
      `,
    },
  ];

  return (
    <>
      <AboutUsHeader />
      <div className="container py-5">
        
        <div className="text-center mb-5">
          <h2 className="text-warning fw-bold">Meet Our Team</h2>
          <p className="lead">
            Our team of experts is dedicated to delivering innovative and effective 
            solutions for all your technology needs.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {teamMembers.map((member, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body">
                  {/* Colored Name */}
                  <h5 className="card-title mt-3" style={{ color: "orange" }}>
                    {member.name}
                  </h5>
                  {/* Italic Profession */}
                  <p className="text-muted fst-italic">{member.profession}</p>
                  <p className="card-text">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
