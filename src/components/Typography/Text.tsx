import React from 'react'

const Text = ({ bold, text }: { text: string, bold?: boolean }) => {
    return (
        <span className='typography--regular' style={{ fontWeight: bold ? 'bold' : '400' }}>{text}</span>
    )
}

export default Text