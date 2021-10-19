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
                                username={info.username} 
                                avatar={info.avatar} />
                    );
                })
            }
        </div>
    );
}

export default CardList;