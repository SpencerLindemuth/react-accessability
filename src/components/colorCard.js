import React from 'react'

const colorCard = (props) => {

    let styles = {
        margin: '20px',
        width: '50px',
        height: '50px',
        border: 'solid lightgray 1px',
        padding: '5px',
        backgroundColor: props.colorName,
        outlineWidth: 'thick'
      };

    return(
        <div title={props.colorName} tabIndex="0" name={props.colorName} className="colorCard" style={styles} onClick={() => props.handleClick(props.colorName)} onKeyDown={(ev) => ev.which === 13 ? props.handleClick(props.colorName) : null}>
        </div>
    )
}

export default colorCard