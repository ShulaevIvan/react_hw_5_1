import React from "react";


const Card = (props) => {
    console.log(props.children)
    return (
        <React.Fragment>
            <div className="card-wrap">
                <div className="image-wrap">
                    {props.children && props.children.type === 'img' ?  <p className="image-text">{props.children.props.alt}</p> : null}
                    {props.children}
                </div>
                <div className="card-body">
                    <div className="card-title-wrap">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="card-content">
                       <p>{props.text}</p>
                    </div>
                    <div className="card-btn-wrap">
                        <button className="card-btn">Go somwhere</button>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Card;