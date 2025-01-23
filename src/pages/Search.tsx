import React from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
    const params = useParams()
    const { inputText } = params
    console.log({ params })
    return (
        <div>Search: {inputText}</div>
    )
}

export default Search