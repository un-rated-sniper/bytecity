import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Store: React.FC = () => {
    return (
        <div className="container text-center mt-5" style={{ paddingTop: '100px' }}>
            {/* Alert Box */}
            <div className="alert alert-warning d-flex align-items-center justify-content-center" role="alert" style={{ borderRadius: '10px' }}>
                <i className="bi bi-cone-striped fs-1 me-3"></i> {/* Using Bootstrap Icons */}
                <div>
                    <h4 className="alert-heading fw-bold">Page Under Construction</h4>
                    <p className="lead">We're working hard to bring this page to you. Stay tuned!</p>
                    <hr />
                    <p className="mb-0">Thanks for your patience!</p>
                </div>
            </div>

            {/* Image */}
            <img 
                src="under-construction.png" 
                className="img-fluid mt-4 rounded shadow-lg" 
                alt="Under Construction" 
                style={{ maxWidth: '300px' }} 
            />

            {/* Call to Action Button */}
            <div className="mt-4">
                <a href="/" className="btn btn-primary btn-lg">Return to Home</a>
            </div>
        </div>
    );
};

export default Store;
