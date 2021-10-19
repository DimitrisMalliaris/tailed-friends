import React from 'react';

const Card = ({name, email, avatar }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc w5'>
            <img src={avatar} alt='avatar'/>
            <div>
                <h2>{name}</h2>
                <a href={`mailto:${email}`} >Email me!</a>
            </div>
        </div>
    );
}

export default Card;