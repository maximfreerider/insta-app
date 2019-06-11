import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = () => {
    return (
        <div className="container profile ">
            <User
                src="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"
                alt="Man"
                name="some_cool_man"
            />
            <Palette/>
        </div>    
    )
}



export default Profile;
