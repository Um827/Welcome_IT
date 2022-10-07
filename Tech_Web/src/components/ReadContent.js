import React from "react";
import "../styles/ReadMore.css";

const ReadContent = () => {
  const readInfo = [
    {
      src: "https://www.w3schools.com/w3css/img_lights.jpg",
      title: "Read More",
      span: "4.7(21)",
      ptitle: "About this Services: ",
      pdetail1:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!",
      pdetail2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.",
    },
  ];

  const renderInfo = (info, index) => {
    return (
      <div class="card-wrapper mt-5" key={index}>
        <div class="card1">
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase" style={{ height: "100vh" }}>
                <img src={info.src} alt="img" />
              </div>
            </div>
          </div>

          <div class="product-content">
            <h2 class="product-title">{info.title}</h2>

            <div class="product-detail">
              <h2>{info.ptitle}</h2>
              <p>{info.pdetail1}</p>
              <p>{info.pdetail2}</p>
              <ul>
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  nisi ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  nisi ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  nisi ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  nisi ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  nisi ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  nisi ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  nisi ut aliquip ex ea commodo consequat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row mt-4 container" id="read-title">
        Teravision Technologies Business Analysts and Product Owners are
        liaisons between IT and business, making sure that the solutions
        provided address the overall needs of the client. With them on the team,
        every action taken will always keep the business and IT teams happy and
        on the same page, without compromising either need in the process. No
        matter what your goals and needs may be, Teravision Business Analysts
        and Product Owners offer the synergy necessary to make your project a
        reality! It is a long established fact that a reader will be distracted
        by the readable content of a page.
      </div>
      {readInfo.map(renderInfo)}
    </div>
  );
};

export default ReadContent;
