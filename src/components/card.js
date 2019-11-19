import React from 'react'

const Card = (props) => {

    let style = {
        backgroundColor: props.backgroundColor
    }

    return(
        <div id="business-card" style={style}>
            <h2>{props.businessName}</h2>
            <span id="fullName">{props.fullName}</span>
            <div id="contact">
                <span id="email">{props.email}</span>
                <span id="phone">{props.phone}</span>
            </div>
        </div>
    )
}

export default Card;