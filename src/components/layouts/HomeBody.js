import React from 'react'
// import HomePagePicture from './HomePagePicture.jpg'; 
import '../../CSSFiles/HomeBody.css'
import LoginForm2 from './LoginForm2';
const HomeBody = () => {
    return (
        <>
            <div className="bodyStyle">
                {/* <img className="imgStyle" src={HomePagePicture} alt="Home Page Picture"/> */}
                <LoginForm2 />
            </div>
        </>
    )
}

export default HomeBody
