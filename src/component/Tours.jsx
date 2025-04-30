import React from 'react';
import Card from './Card.jsx';
export default function Tours(props) {
    function removeHandler(id) {
        console.log(id);
        props.removeTours(id);
    }
    return (
        <div>
            <div>
                <h2 className='text-4xl'>Plan with PAYEL</h2>
            </div>
            <div>
                {props.tours.map((tour) => {
                   return <Card {...tour} key={tour.id} removeTour={removeHandler}/>;
                })}
            </div>
        </div>
    )
}