import './intro.scss'
import { useEffect, useRef } from 'react';
import { init } from 'ityped';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Content Creator']
    })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/ElvinMammadli.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Elvin Mammadli</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
