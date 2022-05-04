import React from 'react';
import './css/about-me.css';

const AboutMePage = () => {
    return (
        <div className='container-fluid p-5'>
            <div id="about-me" className='container' style={{'background': 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 85%)', 'borderRadius': '4rem'}}>
                <div className='container p-5'>
                    <h1 className='titled'>Hi y'all</h1>
                    <span className='description'>I'm Jesús Oyanedel, a chilean computer engineering and backend developer, that's what I like. If I don't have the stack you 're looking for i'm willing to learn the techs you really need
                    </span>
                </div>
                <div className='container p-5'>
                    <h1 className='titled'>What I enjoy</h1>
                    <span className='description'>I really like do sports, not in a competitive way but in a amateur way that brings me opportunities to meet new people, share ideas with them.
                        I do skating, athletism and love playing guitar. Last but not least I enjoy learn new things
                    </span>
                </div>
                <div className='container p-5'>
                    <h1 className='titled'>My motivation</h1>
                    <span className='description'> My motivation to be a developer is, in first place, improve systems until it outperform itself taking the advantage of the widespread quantity of actual tools in the market
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AboutMePage;