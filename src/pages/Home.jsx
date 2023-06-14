import { useEffect, useState, useRef } from "react"
import Footer from "../components/Footer"
import { getRandomPassword, characters } from "../utils"

const Home = () => {
  const [randomPass1, setRandomPass1] = useState("")
  const [randomPass2, setRandomPass2] = useState("")
  const [modalActive, setModalActive] = useState(false)

  const handleGenPassClick = () => {
    setRandomPass1(getRandomPassword(characters))
    setRandomPass2(getRandomPassword(characters))
  }

  const handlePassContainerClick = (e) => {
    navigator.clipboard.writeText(e.target.value)
    setModalActive(true)
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setModalActive(false)
    }, 2000)
    return () => {
      clearTimeout(timeOutId)
    }
  }, [modalActive])

  return (
    <>
      <main>
        <span id="modal" className={modalActive ? "modal active" : "modal"}>
          <img className="tick-img" src="./green-tick.svg" alt="" />
          <p className="modal-text">copied to clipboard</p>
        </span>
        <div className="container">
          <div className="div-heading">
            <h2 className="heading">
              <span className="heading-black">Generate a</span>
              <span className="heading-blue">random password</span>
            </h2>
          </div>
          <p className="description">Never use an insecure password again.</p>
          <button className="generate-pass" onClick={handleGenPassClick}>
            Generate passwords
          </button>

          <p
            className={
              randomPass1 ? "description-two is-active" : "description-two"
            }
          >
            Copy one of the below generated passwords:
          </p>

          <div className={randomPass1 ? "div-pass is-active" : "div-pass"}>
            <div
              id="pass-container-left"
              className="pass-container"
              onClick={handlePassContainerClick}
            >
              {randomPass1}
            </div>
            <div
              id="pass-container-right"
              className="pass-container"
              onClick={handlePassContainerClick}
            >
              {randomPass2}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default Home
