import React, { useState } from 'react'

const About = () => {
    const [bgBlack, setBgBlack] = useState(null);

    const handleClickBlack = (index) => {
        setBgBlack(index);
    }

    const boxStyle = (index) => ({
        backgroundColor: bgBlack === index ? 'black' : 'white',
        cursor: 'pointer',
        color: bgBlack === index ? 'white' : 'black',
    });

    const featureLogoStyle = (index) => ({
        backgroundColor: bgBlack === index ? 'white' : 'black',
    });
    const featureLogo = (index) => ({
        Color: bgBlack === index ? 'black' : 'white',
    });



    return (
        <div className='container about-container py-5' id='about'>
            <div className='mb-5 d-flex justify-content-between flex-wrap'>
                <div className='about-wrapper-1'>
                    <div className='text-container'>
                        <h1 className='heading-sub-title'>We Are Dedicated to Provide Quality Services</h1>
                        <p className='paragraph mb-5'>At our marketplace, we bring you the best vehicles from top brands. Find the cars
                            that suits your style and budget
                        </p>
                    </div>
                    <img src='../../Assests/porche.png' alt='porche' className='image-width' />
                </div>
                <div className='about-wrapper-2'>
                    <div className='features-tab' style={boxStyle(1)} onClick={() => handleClickBlack(1)}>
                        <div className='feature-logo text-center' style={featureLogoStyle(1)}>
                            <img src='../../Assests/car-4-svgrepo-com.svg' alt='logo' style={featureLogo(1)} />
                        </div>
                        <p className='heading-sub-text'>Certified Mechanics</p>
                        <p className='paragraph'>Browse a wide selection of new and used cars from trusted dealers and sellers.</p>
                    </div>
                    <div className='features-tab' style={boxStyle(2)} onClick={() => handleClickBlack(2)}>
                        <div className='feature-logo text-center' style={featureLogoStyle(2)}>
                            <img src='../../Assests/car-4-svgrepo-com.svg' alt='logo' style={featureLogo(2)} />
                        </div>
                        <p className='heading-sub-text'>Certified Mechanics</p>
                        <p className='paragraph'>Browse a wide selection of new and used cars from trusted dealers and sellers.</p>
                    </div>
                    <div className='features-tab' style={boxStyle(3)} onClick={() => handleClickBlack(3)}>
                        <div className='feature-logo text-center' style={featureLogoStyle(3)}>
                            <img src='../../Assests/car-4-svgrepo-com.svg' alt='logo' style={featureLogo(3)} />
                        </div>
                        <p className='heading-sub-text'>Certified Mechanics</p>
                        <p className='paragraph'>Browse a wide selection of new and used cars from trusted dealers and sellers.</p>
                    </div>
                    <div className='features-tab' style={boxStyle(4)} onClick={() => handleClickBlack(4)}>
                        <div className='feature-logo text-center' style={featureLogoStyle(4)}>
                            <img src='../../Assests/car-4-svgrepo-com.svg' alt='logo' style={featureLogo(4)} />
                        </div>
                        <p className='heading-sub-text'>Certified Mechanics</p>
                        <p className='paragraph'>Browse a wide selection of new and used cars from trusted dealers and sellers.</p>
                    </div>
                    
                </div>
            </div>
            <div className='car-logo-section d-flex flex-wrap justify-content-between'>
                <img src='../../Assests/audi.png' alt='audi' className='mb-2' />
                <img src='../../Assests/bmw.svg' alt='audi' className='mb-2' />
                <img src='../../Assests/mercedes.svg' alt='audi' className='mb-2' />
                <img src='../../Assests/audi.png' alt='audi' className='mb-2' />
            </div>
        </div>
    )
}

export default About;