import GoogleLogo from "#/components/Logo/GoogleLogo"
import React, { FormEvent, useEffect, useRef } from "react"
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg'
import { ReactComponent as ClearIcon } from '../assets/svg/clear.svg'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const inputValue = inputRef.current?.value || ''
    navigate(`/search/${inputValue}`)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="home">
      <GoogleLogo />
      <form className="form" onSubmit={onSubmit}>
        <div className="input">
          <SearchIcon className="input--icon" />
          <input className='input--box' type="text" ref={inputRef} />
          <ClearIcon className="input--icon" />
        </div>
        <button className="button" type="submit">
          Buscar
        </button>
      </form>
    </div>
  )
}

export default Home