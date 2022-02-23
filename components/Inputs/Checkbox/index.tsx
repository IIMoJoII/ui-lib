import React from 'react';

interface CheckboxProps {
    width?: string
    height?: string
}

const Checkbox: React.FC<CheckboxProps> = ({width, height}) => {
    const style = {
        width: width || '100%',
        height: height || '100%'
    }

    return (
        <input
            type='checkbox'
            style={style}
        />
    )
}

export default Checkbox

