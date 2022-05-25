import React from "react";
import "./SingleTrend.css";
const SingleTrend = ({ service }) => {
  const {
    id,
    image,
    title,
    description,
    graph_img,
    percent,
    count_no,
    count_img,
    verification_img,
  } = service;
  return (
    <div>
      <div className="mr-8 ml-8">
        <div className="t-part1">
          <div className="part-1 pt-4">
            <div className="ml-6 pt-6">
              <h3 style={{ color: "#999aa1", fontSize: "24px" }}>
                {id}.
              </h3>
            </div>
            <div className="pt-3">
              <div className="ml-8 part-img">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="ml-6 mt-6">
              <div className="flex">
                <h5 style={{ fontSize: "18px", color: "#454444", marginRight: "3px", fontWeight: 600 }}>
                  {title}
                </h5>
                <img src={verification_img} alt="" />
              </div>
              <p style={{ color: "#7c7b85", fontSize: 14 }}>
                {description}
              </p>
            </div>
          </div>

          {/* part2 */}
          <div className=" part-2 relative">
            <div className="part-2-img-1">
              <img style={{ width: "65%" }} src={graph_img} alt="" />
            </div>
            <div className=" pt-4 fw-bold">
              <h6 style={{ color: "#85858b", marginTop: -74, marginRight: 140 }} className="font-bold ">
                % {percent}
              </h6>
            </div>
            
            <div style={{ color: "#85858b", marginRight: 150, marginTop: -74, }} className="pt-4 flex">
              <h6 >
                {count_no}
              </h6>
              <img
                style={{
                  width: "50%",
                  height: "10%",
                  marginLeft: "7px",
                  marginTop: "7px",
                }}
                src={count_img}
                alt=""
              />
              
            </div>
            <div className="pt-4 i-con2 absolute bottom-10 right-6">
              <i className="fas fa-angle-down "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrend;
