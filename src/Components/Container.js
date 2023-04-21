import React from "react";

const Container = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '28px'
            }}
        >
            {props.children}
        </div>
    )
}

export default Container;