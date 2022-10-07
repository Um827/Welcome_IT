import React from "react";
import "../styles/Footer.css";

const Footer = ({ data }) => {
  console.log(data);
  return (
    <section>
      <footer id="footer">
        <div className="footer-top mt-4">
          <div className="container">
            <div className="row" data-aos="fade-right">
              <div className="col-lg-3 col-md-6 footer-contact">
                <div style={{ width: "16%" }}>
                  {data.footer_company_logo?
                    <img
                      src={`${process.env.REACT_APP_STORAGE_URL}/${data.footer_company_logo}`}
                    />
                    :
                    <h3>{data.company_name}</h3>
                  }
                </div>
                <p>
                  {data.location}
                  <br></br>
                  <strong>Phone:</strong> {data.call}
                  <br></br>
                  <strong>Email:</strong> {data.email}
                  <br></br>
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>{data.footer_useful_links_title}</h4>
                <ul>
                  {data.useful_links &&
                    data.useful_links.map((item) => (
                      <li>
                        <a href="#">{item.name}</a>
                      </li>
                    ))}
                  {/* <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li> */}
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>{data.footer_our_services_title}</h4>
                <ul>
                  {data.our_services_links &&
                    data.our_services_links.map((item) => (
                      <li>
                        <a href="#">{item.name}</a>
                      </li>
                    ))}
                  {/* <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Graphic Design</a>
                  </li> */}
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>{data.social_networks_title}</h4>
                <p id="footer-p">{data.social_networks_description}</p>
                <div className="social-links mt-3">
                  {data.twitter_link && <a href={data.twitter_link}  className="twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </a>}
                 { data.fb_link && <a href={data.fb_link} className="facebook">
                    <i className="fa-brands fa-facebook"></i>
                  </a>}

                  {data.insta_link && <a href={data.insta_link} className="instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>}
                  {data.skype_link && <a href={data.skype_link} className="google-plus">
                    <i className="fa-brands fa-skype"></i>
                  </a>}
                  {data.linkedin_link &&<a href={data.linkedin_link} className="linkedin">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            {data.copyright_text}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
