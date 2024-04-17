import React from 'react'

const Footer = () => {
    return (
        <div className='bg-dark text-light py-4'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                        <h5 className='heading-sub-text'>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a className='paragraph' href="home">Home</a></li>
                            <li><a className='paragraph' href="about">About</a></li>
                            <li><a className='paragraph' href="cars">Cars</a></li>
                            <li><a className='paragraph' href="conatct">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                        <h5 className='heading-sub-text'>Contact Us</h5>
                        <p className='mb-0 paragraph'>123 Main Street, City</p>
                        <p className='mb-0 paragraph'>Email: drivenexus@vehicles.com</p>
                        <p className='mb-0 paragraph'>Phone: +1 (123) 456-7890</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                        <h5 className='heading-sub-text'>Social Media</h5>
                        <div className='d-flex social-logo'>
                            <img src='../../Assests/fb.png' alt='facebook' />
                            <img src='../../Assests/ig.png' alt='facebook' />
                            <img src='../../Assests/twitter.png' alt='facebook' />
                            <img src='../../Assests/yt.png' alt='facebook' />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className='text-center mb-0 paragraph'> © Design by @uiuxsharon | developed by sagar magare</p>
        </div>
    )
}

export default Footer