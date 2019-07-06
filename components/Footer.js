import React from 'react';

function Footer(props) {
  return (
    <div className="footer mt-5">
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container">
          <p className="display-6 text-center">Copyright Blog {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;