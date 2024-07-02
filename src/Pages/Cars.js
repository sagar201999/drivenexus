import React, { useState } from 'react'

const Cars = () => {

    const [clicked, setClicked] = useState(null);

    const handleClick = (index) => {
        setClicked(index);
    }

    const carTypes = [
        {
            name: 'Audi',
            logo: "../../Assests/bmw.svg"
        },
        {
            name: 'BMW',
            logo: "../../Assests/bmw.svg"
        },
        {
            name: 'Cadilac',
            logo: "../../Assests/bmw.svg"
        },
        {
            name: 'Mercedes',
            logo: "../../Assests/bmw.svg"
        },
        {
            name: 'Explore 10+',
            logo: "../../Assests/bmw.svg"
        }
    ];

    const boxStyle = (index) => ({
        backgroundColor: clicked === index ? 'black' : 'white',
        cursor: 'pointer',
        color: clicked === index ? 'white' : 'black',
    });


    return (
        <div className='container text-center py-5'>
            <h2 className='heading-sub-title mb-4'>Explore Our Vehicles</h2>
            <div className='d-flex flex-wrap justify-content-center'>
                {carTypes.map((items, index) => (
                    <div id={index} className='d-flex align-items-center car-type-wrapper' style={boxStyle(index)} onClick={() => handleClick(index)}>
                        <img src={items.logo} alt='logo' style={{ width: '25px', height: 'auto', marginRight: '15px' }} />
                        <span className='paragraph'>{items.name}</span>
                    </div>
                ))}
            </div>
            <div className='d-flex justify-content-center flex-wrap'>
                <div className='car-model-wrapper'>
                    <img src='../../Assests/mercedes-1.png' alt='mercedes' className='mb-3' />
                    <div>
                        <p className='heading-sub-text text-start mb-1'>Mercedes-Benzs Sprinter</p>
                        <p className='paragraph text-start mb-2'>Release 23 May 2023</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='heading-sub-text my-auto'>$48,000</p>
                            <button className='btn-1 paragraph' style={{ padding: '2px 15px', borderRadius: '2px' }}>Discover</button>
                        </div>
                    </div>
                </div>
                <div className='car-model-wrapper'>
                    <img src='../../Assests/mercedes-1.png' alt='mercedes' className='mb-3' />
                    <div>
                        <p className='heading-sub-text text-start mb-1'>Mercedes-Benzs Sprinter</p>
                        <p className='paragraph text-start mb-2'>Release 23 May 2023</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='heading-sub-text my-auto'>$48,000</p>
                            <button className='btn-1 paragraph' style={{ padding: '2px 15px', borderRadius: '2px' }}>Discover</button>
                        </div>
                    </div>
                </div>
                <div className='car-model-wrapper'>
                    <img src='../../Assests/mercedes-1.png' alt='mercedes' className='mb-3' />
                    <div>
                        <p className='heading-sub-text text-start mb-1'>Mercedes-Benzs Sprinter</p>
                        <p className='paragraph text-start mb-2'>Release 23 May 2023</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='heading-sub-text my-auto'>$48,000</p>
                            <button className='btn-1 paragraph' style={{ padding: '2px 15px', borderRadius: '2px' }}>Discover</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Cars