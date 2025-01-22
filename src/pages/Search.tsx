import React from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
    const { inputText } = useParams()
    return (
        <div>Search: {inputText}</div>
    )
}

export default Search