import { Link } from 'react-router-dom';
import './homepage.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const Homepage = () => {
    const [typingStatus, setTypingStatus] = useState("human1");

    return (
        <div className='homepage'>
            <img src='/public/orbital.png' alt='' className='orbital'></img>
            <div className='left'>
                <h1>CHAT AI</h1>
                <h2>Created by my effor, my hope, my love</h2>
                <h3>abc xyz jhin </h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className='right'>
                <div className='imgContainer'>
                    <div className='bgContainer'>
                        <div className='bg'></div>
                    </div>
                    <img src='/public/bot.png' alt='' className='bot'></img>
                    <div className='chat'>
                        <img src={typingStatus === "human1" ? "/public/human1.jpeg" : typingStatus === "human2" ? "/public/human2.jpeg" : "/public/bot.png"} alt=''></img>
                        <TypeAnimation
                            sequence={[
                            // Same substring at the start will only be typed out once, initially
                                'We produce food for Mice',
                                1000, ()=>{
                                    setTypingStatus("bot")
                                },
                                'We produce food for Hamsters',
                                1000,()=>{
                                    setTypingStatus("human2")
                                },
                                'We produce food for Guinea Pigs',
                                1000,()=>{
                                    setTypingStatus("bot")
                                },
                                'We produce food for Chinchillas',
                                1000,()=>{
                                    setTypingStatus("human1")
                                },
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>
            <div className='terms'>
                <img src='/public/brycen-vietnam-logo.png' alt=''></img>
                <div className='links'>
                    <Link to="/">Terms of Service</Link>
                    <span></span>
                    <Link to="/">Privacy Police</Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;