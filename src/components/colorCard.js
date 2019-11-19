import React from 'react'

const colorCard = (props) => {

    let styles = {
        margin: '20px',
        width: '50px',
        height: '50px',
        border: 'solid lightgray 1px',
        backgroundColor: props.colorName,
      };

    return(
        <div name={props.colorName} className="colorCard" style={styles} onClick={() => props.handleClick(props.colorName)}>
        </div>
    )
}

export default colorCard