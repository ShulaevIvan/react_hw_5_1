import React from "react";


const Card = () => {
    return (
        <React.Fragment>
            <div className="card-wrap">
                <div className="image-wrap">
                    <p className="image-text">image cap</p>
                    <img src="https://via.placeholder.com/300x150" />
                </div>
                <div className="card-body">
                    <div className="card-title-wrap">
                        <h3>Card-Title</h3>
                    </div>
                    <div className="card-content">
                       <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="card-btn-wrap">
                        <button className="card-btn">Go somwhere</button>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Card;