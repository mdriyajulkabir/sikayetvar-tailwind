import React, { useEffect, useState } from "react";
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import SingleTrend from "./Trend-100/SingleTrend";
import "./Trend-100/Trend100.css"
function Trend100() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/trend.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return (
        <div>
            <Navbar/>
            <div>
            <div className="container mx-auto pt-12">
                <div className="row w-full">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="ml-20">
                            <h1 className="t-t flex">
                                <span>
                                    Trend{" "}
                                </span>
                                <span className="pt-3 ml-2">
                                    <img
                                        src="https://cdn.sikayetvar.com/public/images/100.svg"
                                        alt="100"
                                    />
                                </span>
                            </h1>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-8 col-sm-8 col-11"> */}
                    <div className="mr-16">
                        <div className="social_icon flex flex-row-reverse space-x-4 space-x-reverse">
                            <p className="more mr-2">
                                <i className="fa-solid fa-plus i-icon"></i>
                            </p>
                            <p className="whatsapp">
                                <i className="fa-brands fa-whatsapp i-icon"></i>
                            </p>
                            <p className="linkedIn">
                                <i className="fa-brands fa-linkedin i-icon"></i>
                            </p>
                            <p className="facebook">
                                <i className="fa-brands fa-facebook-f i-icon"></i>
                            </p>
                            <p className="tweeter">
                                <i class="fa-brands fa-twitter i-icon "></i>
                            </p>
                            <p className="paylas">Share</p>
                        </div>
                    </div>

                    <p className="pt-3 ml-20 t-text">
                        Trend 100, lists the most curious brands in Turkey.
                    </p>
                </div>
            </div>
            <div className="p-14">
                <div className="container pl-16 pr-20">
                    <div className="row font-bold pt-14" style={{ color: "#afb0b6" }}>
                        <div className="col">
                            <p style={{marginBottom:"-20px"}} className="trend-brand">
                                Brand
                            </p>
                        </div>
                        <div className="col">
                            <div className="tt-text mb-9">
                                <p className=" mr-40">
                                    Trend
                                </p>
                                <p className="mr-20">
                                    Visitor Increase
                                </p>
                                <p className="">
                                    Previous Sort
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container t-all">
                    {data.map((service) => (
                        <SingleTrend
                            style={{ backgroundColor: "black" }}
                            key={service.id}
                            service={service}></SingleTrend>
                    ))}
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    );
}

export default Trend100;