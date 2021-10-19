import React from 'react';
import Card from '../Card/Card';

const CardList = ({friends}) => {
    return (
        <div>
            {
                friends.map((info) => {
                    return(
                        <Card key={info.id} 
                                name={info.name} 
                                email={info.email} 
                                avatar={info.avatar} />
                    );
                })
            }
        </div>
    );
}

export default CardList;