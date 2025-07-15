import styles from './Button.module.css'
import React from "react";

function Button (props) {
    const { children, disabled = false} = props
    return( 
    <button 
        {...props}
        className={styles.button} 
        disabled={disabled}>
        {children}
    </button>)
}

export default Button 