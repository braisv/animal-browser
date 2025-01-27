import React from 'react';

const Text = ({
    bold,
    text,
    title,
    size = 'regular',
}: {
    text: string;
    bold?: boolean;
    title?: boolean;
    size?: string;
}) => {
    return (
        <span
            className={`typography--${size}`}
            style={{
                fontWeight: bold ? 'bold' : '400',
                color: title ? 'blue' : '',
                cursor: title ? 'pointer' : '',
            }}
        >
            {text}
        </span>
    );
};

export default Text;
