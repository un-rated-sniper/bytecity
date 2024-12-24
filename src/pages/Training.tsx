import { Container, Row, Col, Button } from 'react-bootstrap';
import TrainingHero from '../components/TrainingHero';

const trainingData = [
  {
    title: 'Web Development',
    description:
      'Our Web Development course equips you with the skills to build modern, responsive websites and web applications. You’ll learn to use cutting-edge technologies such as React, TypeScript, and Node.js. Additionally, we focus on content management systems (CMS) like Strapi to help you manage dynamic content efficiently. This course is perfect for those who want to master the tools to create robust and scalable websites.',
    image: 'web-development.png',
    buttonText: 'Join a Class',
    reverse: false,
  },
  {
    title: 'Graphic Design',
    description:
      'Master the art of graphic design and unleash your creativity using the Adobe Creative Suite. Learn to design world-class branding materials, including logos, business cards, and brochures, while exploring advanced tools in Photoshop, Illustrator, and InDesign. This course is perfect for individuals who want to create visually compelling designs for digital and print media and build a distinctive brand identity.',
    image: 'graphic-design.png',
    buttonText: 'Register for the Course',
    reverse: true,
  },
  {
    title: 'Python Data Analysis',
    description:
      'Dive into the world of data with our Python Data Analysis course. Learn how to manipulate and analyze large datasets using powerful frameworks such as Pandas, NumPy, and Matplotlib. Whether you want to create visualizations, generate insights, or prepare data for machine learning, this course will provide you with the skills to succeed.',
    image: 'python-data-analysis.png',
    buttonText: 'Join a Class',
    reverse: false,
  },
];

const TrainingSection = ({
  title,
  description,
  image,
  buttonText,
  reverse,
}: {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  reverse: boolean;
}) => (
  <Row
    className={`align-items-center mb-5 ${
      reverse ? 'flex-lg-row-reverse' : ''
    }`}
  >
    <Col
      lg={6}
      className="text-center text-lg-start mb-4 mb-lg-0 px-3"
      style={{ padding: '0 1.5rem' }}
    >
      <h3 className="text-warning fw-bold mb-3">{title}</h3>
      <p className="text-muted fs-5 mb-4">{description}</p>
      <Button
        variant="warning"
        className="mt-3 px-4 py-2 fw-bold rounded-3 shadow-sm"
      >
        {buttonText}
      </Button>
    </Col>
    <Col lg={6} className="d-flex justify-content-center px-3">
      <img
        src={image}
        alt={title}
        className="img-fluid rounded shadow-lg"
        style={{
          maxHeight: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
    </Col>
  </Row>
);

const Training = () => {
  return (
    <section className="training-section py-5 bg-light" id="training">
      <TrainingHero />
      <Container className="py-4">
        {trainingData.map((item, index) => (
          <TrainingSection key={index} {...item} />
        ))}
      </Container>
      <style jsx global>{`
        .training-section {
          padding: 2rem 0;
        }

        @media (max-width: 576px) {
          .training-section h3 {
            font-size: 1.5rem;
          }
          .training-section p {
            font-size: 1rem;
          }
          .training-section img {
            max-height: 250px !important;
          }
        }

        @media (max-width: 768px) {
          .training-section h3 {
            font-size: 1.75rem;
          }
          .training-section p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Training;
