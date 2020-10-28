import React from 'react';



const ButtonWIthIcon = (props) => {
    const {icon, handleClick, text, color, background, font} = props
    const styles = {
        color: color,
        background: background,
        fontSize: font,
    }
    return (
            <button onClick={handleClick} style={styles} className="btn btn-light btn-outline mr-1">
                {
                    text && ( <span className={"mr-2"}>{text}</span>)
                }
                {
                    icon && ( <i className={icon} style={{color: '#fffff'}}></i>
                    )
                }

            </button>


    );
}

export default ButtonWIthIcon;