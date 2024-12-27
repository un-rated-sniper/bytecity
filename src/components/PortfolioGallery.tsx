import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PortfolioGallery = () => {
  const photosPool = [
    '/images/photo1.png',
    '/images/photo2.png',
    '/images/photo3.png',
    '/images/photo4.png',
    '/images/photo5.png',
    '/images/photo6.png',
    '/images/photo7.png',
    '/images/photo8.png',
    '/images/photo9.png', // Add as many photos as you need
  ];

  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);

  useEffect(() => {
    const getRandomPhotos = () => {
      const shuffledPhotos = [...photosPool].sort(() => 0.5 - Math.random()).slice(0, 4);
      setCurrentPhotos(shuffledPhotos);
    };

    getRandomPhotos();
    const interval = setInterval(getRandomPhotos, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-5 bg-light text-center d-flex align-items-center"
      style={{
        height: 'auto', // Let the section height adjust based on content
      }}
    >
      <Container>
        <h2 className="text-warning mb-3">Portfolio</h2>
        <hr style={{ width: '60px', margin: '0 auto', borderTop: '2px solid orange' }} />

        <Row className="mt-4">
          {currentPhotos.map((photo, index) => (
            <Col
              key={index}
              md={3} // On medium screens, show 4 columns
              sm={6} // On small screens, show 2 columns
              xs={12} // On extra small screens, show 1 column
              className="my-3"
            >
              <div
                className="overflow-hidden rounded shadow img-container"
                style={{
                  height: 'auto',
                  maxHeight: '300px',
                }}
              >
                <img
                  src={photo}
                  alt={`Portfolio Image ${index + 1}`}
                  loading="lazy" // Lazy loading for performance
                  className="img-fluid w-100 h-100 object-fit-cover transition-transform img-hover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder.png'; // Fallback image
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .transition-transform {
          transition: transform 0.3s ease-in-out;
        }

        .img-hover:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default PortfolioGallery;
