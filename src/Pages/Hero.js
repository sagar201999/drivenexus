import React from "react";
import '../App.css'
import '../MediaQueries.css'

const Hero = () => {
    return (
        <div className="bg-dark text-light main-container" id="home">
            <div className="hero-container d-flex flex-wrap align-items-center justify-content-between w-100">
                <div className="hero-section-1">
                    <div className="mb-4">
                        <h1 className="hero-heading-title heading-title">Drive Home with Your <span className="hero-heading-title heading-title text-red">Perfect Car</span></h1>
                        <p className="paragraph">Get behind the wheel of your dream car. Explore our extensive inventory and take the first step towards your next adventure.</p>
                    </div>
                    <div className="hero-buttons">
                        <button className="btn-1 me-3">Explore More</button>
                        <a href="https://www.youtube.com/watch?v=DZAdVY9kKbc" rel="noreferrer" target="_blank" className="btn text-light"><img src="../../Assests/play.png" alt="play" className="play" />Watch Video</a>
                    </div>
                </div>
                <div className="hero-section-2">
                    <img src="../../Assests/porche.png" alt="car" />
                </div>
            </div>
            <div className="search-container bg-white text-dark py-3 rounded pb-4">
                <p className="heading-sub-text fs-5">Search our 30000 vehicle</p>
                <div>
                    <form className="d-flex flex-wrap  justify-content-between">
                        <input type="text" className="input-style" placeholder="Search by keywords" />
                        <select class="input-style" id="exampleSelect">
                            <option>All Brands</option>
                            <option>BMW</option>
                            <option>Audi</option>
                            <option>Mercedes</option>
                            <option>Rolls Royes</option>
                            <option>Tesla</option>
                        </select>
                        <select class="input-style" id="exampleSelect">
                            <option>All Models</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                        </select>
                        <select class="input-style" id="exampleSelect">
                            <option>Budget</option>
                            <option>$ 25000</option>
                            <option>$ 35000</option>
                            <option>$ 45000</option>
                            <option>$ 60000</option>
                        </select>
                        <div>
                        <button className="btn-1" style={{ padding: "5px 30px", borderRadius: '2px' }} >Search</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default Hero;
