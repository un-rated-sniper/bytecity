import React from 'react';
import Hero from '../components/Hero';

const Careers: React.FC = () => {
    return (
        <div className="careers-page">
            <Hero onHireUsClick={() => window.location.href = 'mailto:careers@bytecitytech.com'} />
            <div className="content">
                <h1>Careers at ByteCity Tech</h1>
                <p>Join our team and help us build the future of technology!</p>
                
                <section className="open-positions">
                    <h2>Open Positions</h2>
                    <ul>
                        <li>Software Engineer</li>
                        <li>Product Manager</li>
                        <li>UX/UI Designer</li>
                        <li>Data Scientist</li>
                    </ul>
                </section>
                
                <section className="why-work-with-us">
                    <h2>Why Work With Us?</h2>
                    <p>At ByteCity Tech, we offer a dynamic work environment, competitive salaries, and opportunities for growth and development.</p>
                </section>
                
                <section className="how-to-apply">
                    <h2>How to Apply</h2>
                    <p>Send your resume and cover letter to <a href="mailto:careers@bytecitytech.com">careers@bytecitytech.com</a>.</p>
                </section>
                
                <section className="apply-now">
                    <button onClick={() => window.location.href = 'mailto:careers@bytecitytech.com'}>Apply Now</button>
                </section>
            </div>
        </div>
    );
};

export default Careers;