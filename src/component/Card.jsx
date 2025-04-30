import React, { useState } from "react";
const Card = ({ id, image, info, price, name, removeTour }) => {
    const [readmore, setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;
    function readmoreHandler() {
        setReadMore(!readmore);
    }
    return (
        <div>
          <img src={image} className="image" alt="img" height={400} width={400}/>
          <div>
            <div>
                <h4>{price}</h4>
                <h4>{name}</h4>
            </div>
            <div>
            {description}
                    <span  onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
            </div>
          </div>
          <button onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
};

export default Card;