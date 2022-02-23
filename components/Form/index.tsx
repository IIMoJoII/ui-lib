import React from "react";
import styles from './style.module.scss'


interface FormProps {
    gap?: string
    padding?: string
}


const Form: React.FC<FormProps> = ({
                                       gap,
                                       padding,
                                       children
}) => {

    const handleSubmit = (e: any) => {

    }

    return (
        <form
            onSubmit={handleSubmit}
            noValidate={true}
            className={styles.form}
            style={{
                display: 'grid',
                gap: gap || '10px',
                padding: padding || '20px 0'}}
        >
            <div
                style={{
                    gridColumn: '1/2',
                    position: "relative",
                    marginTop: 5
                }}>
                {inputs.map(input => children)}
            </div>
        </form>
    );
}

export default Form;