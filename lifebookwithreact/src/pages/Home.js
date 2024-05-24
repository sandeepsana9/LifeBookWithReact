import React from 'react'
import {Link} from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import '../css/Home.css'
function Home() {
    return (
        <>
            <div className='main'>
                <Link to="/reactjs" className='card'>
                    <div className='heading'>
                        <p>React JS</p>
                        <div className='round-animation'>
                            <i className="ri-reactjs-line"></i>
                        </div>
                    </div>
                    <div className='content'>
                        <p>
                            React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React.
                        </p>
                        <div className='expend'>
                            <i className="ri-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                </Link>
                <Link to="/css" className='card'>
                    <div className='heading'>
                        <p>CSS</p>
                        <div className='round-animation'>
                            <i className="ri-reactjs-line"></i>
                        </div>
                    </div>
                    <div className='content'>
                        <p>
                        CSS stands for Cascading style sheets. It describes to the user how to display HTML elements on the screen in a proper format. CSS is the language that is used to style HTML documents. In simple words, cascading style sheets are a language used to simplify the process of making a webpage.
                        </p>
                        <div className='expend'>
                            <i className="ri-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                </Link>
                <div className='card'>
                    <div className='heading'>
                        <p>React JS</p>
                        <div className='round-animation'>
                            <i className="ri-reactjs-line"></i>
                        </div>
                    </div>
                    <div className='content'>
                        <p>
                            React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React.
                        </p>
                        <div className='expend'>
                            <i className="ri-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='heading'>
                        <p>React JS</p>
                        <div className='round-animation'>
                            <i className="ri-reactjs-line"></i>
                        </div>
                    </div>
                    <div className='content'>
                        <p>
                            React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React.
                        </p>
                        <div className='expend'>
                            <i className="ri-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='heading'>
                        <p>React JS</p>
                        <div className='round-animation'>
                            <i className="ri-reactjs-line"></i>
                        </div>
                    </div>
                    <div className='content'>
                        <p>
                            React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React.
                        </p>
                        <div className='expend'>
                            <i className="ri-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home