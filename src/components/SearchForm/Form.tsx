import React, { FormEvent, useEffect, useRef, useState } from "react"
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { ReactComponent as ClearIcon } from '../../assets/svg/clear.svg'
import { useNavigate, useParams } from "react-router-dom"
import { isHome } from "#/helpers/utils"

const Form = () => {
    const navigate = useNavigate()
    const { inputText } = useParams()
    const [inputValue, setInputValue] = useState(inputText ?? '')
    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate(`/search/${inputValue}`)
    }

    const onChange = () => {
        setInputValue(inputRef.current?.value ?? inputValue)
    }

    const onClear = () => {
        if (inputRef.current) {
            setInputValue('')
            inputRef.current.value = ''
            inputRef.current?.focus()
        }
    }

    useEffect(() => {
        if (!inputText) {
            inputRef.current?.focus()
        }
    }, [])

    return (
        <form className={`form ${isHome() ? '' : 'form--small'}`} onSubmit={onSubmit}>
            <div className="input">
                <SearchIcon className="input--icon" />
                <input
                    className='input--box'
                    type="text" ref={inputRef}
                    defaultValue={inputValue}
                    onChange={onChange}
                />
                {inputValue && <ClearIcon className="input--icon" onClick={onClear} />}
            </div>
            {isHome() && <button className="button" type="submit" disabled={!inputValue}>
                Buscar
            </button>}
        </form>
    )
}

export default Form