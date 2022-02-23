import React from 'react';
import styles from './style.module.scss'

interface DefaultInputProps {
    width?: string
    height?: string
    type?: 'text' | 'email' | 'password'
}

const DefaultInput: React.FC<DefaultInputProps> = ({
                                                       width,
                                                       height,
                                                       type
}) => {

    const style = {
        width: width || '100%',
        height: height || '100%'
    }

    return (
        <input
            className={styles.input}
            type={type || 'text'}
            style={style}
        />
    )
}

export default DefaultInput

