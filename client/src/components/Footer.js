import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid background" style={{marginTop: '50px'}}>
      <hr className="hr"></hr>
      <footer className="row row-cols-5 py-5 d-flex">
        <div className="container-fluid col-6 px-5 text-center ">
          <img
            alt="Enconto Flowers Logo"
            src="/images/encanto_logo_footer.png"
            width="268"
            height="82"
            className="d-inline-block align-top"
          />
        </div>
        <div className="container col-3">
          <h5 className="h5">Categories</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 links">
                Seasonal
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 links">
                Romance
              </a>
            </li>
            <li className="nav-item mb-2 links">
              <a href="#" className="nav-link p-0 links">
                Get Well
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 links">
                Sympathy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 links">
                Friendship
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 links">
                Funerals
              </a>
            </li>
          </ul>
        </div>
        <div className="container col-3">
          <h5 className="h5">Info</h5>
          <ul className="nav flex-column">
            <p className="links">Contact Us:</p>
            <li className="nav-item mb-2">
              <a href="tel:1231231234" className="nav-link p-0 links">
                123-123-1234
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 links">
                Terms & Conditions
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 links">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
