import React from 'react'

const Vechile = () => {
    return (
        <div className="bg-dark text-light main-container py-5" id="vechile">
            <div className="container d-flex flex-wrap justify-content-between align-items-center">
                <div className="vehicle-section-1">
                    <div className="mb-4 vehicle-sec-text">
                        <h1 className="heading-title">World Largest Car Brands Marketplace</h1>
                        <p className="paragraph">At our car marketplace, we bring you the best vechiles from top brands. Find the cars that suits your style.</p>
                        <ul>
                            <li><img src='../../Assests/check-mark.png' alt='check' className='check me-2' />We have a safe payment system</li>
                            <li><img src='../../Assests/check-mark.png' alt='check' className='check me-2' />A large collection of cars available</li>
                            <li><img src='../../Assests/check-mark.png' alt='check' className='check me-2' />We have the best drivers in the world</li>
                        </ul>
                    </div>
                    <div>
                        <button className="btn-1 me-3">Read More</button>
                    </div>
                </div>
                <div className="vehicle-section-2">
                    <img src="../../Assests/mercedes.png" alt="car" />
                </div>
            </div>
        </div>

    )
}

export default Vechile