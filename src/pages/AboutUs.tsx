import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1>About Us</h1>
          <p>
            Welcome to ByteCity Tech Computer Solutions! We are dedicated to providing the best service possible.
            Our team is composed of experienced professionals who are passionate about leveraging technology to solve complex challenges.
          </p>
          <p>
            Our mission is to deliver high-quality products that meet the needs of our customers.
            We believe in innovation, integrity, and excellence in everything we do.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Agwata - Co-Founder and Tech Strategist</h2>
          <p>
            Meet a dynamic Co-founder of ByteCity Tech Computer Solutions, bringing a wealth of expertise as a web designer, virtual assistant, technical support specialist, and certified Pythonist. 
            With certifications in AWS Cloud Practitioner, Ethical Hacking, and Software Engineering, Agwata has a solid foundation in cutting-edge technology and cybersecurity. 
            Passionate about leveraging technology to solve complex challenges, Agwata excels in ICT consultancy, system sourcing, and creative branding. 
            As a skilled professional dedicated to innovation and efficiency, Agwata ensures ByteCity delivers world-class tech solutions tailored to clients’ unique needs.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Dolphine - Designer and Creative Visionary</h2>
          <p>
            Dolphine is a certified Adobe designer with over 5 years of professional experience in branding, designing, printing, and signage. 
            Her educational background in Arts and Graphic Design has equipped her with the perfect blend of technical expertise and artistic vision, making her a standout in the creative industry. 
            Spending countless hours behind the Adobe Creative Suite, she has mastered the art of bringing bold ideas to life. 
            Whether it’s designing logos, building brand identities, or creating captivating promotional materials, her work is consistently polished and impactful. 
            With her combination of certification, experience, and artistic education, Dolphine truly is the best in the field of branding and design. 
            If you're searching for someone who can elevate your brand, look no further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;