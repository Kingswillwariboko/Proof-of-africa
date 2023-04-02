import React,{useState, useEffect} from 'react'
import btn from "../../assets/a.svg"
import { Link } from 'react-scroll';
import "./Hero.scss"
import { createClient } from "contentful"

const Hero = () => {
  const [main, setMain] = useState([])
  const [secondMain, setSecondMain] = useState([])
  const [info, setInfo] = useState([])
  const client = createClient({ space: "audrfmrh2x7a", accessToken: "Ol36WYE4bG73TURBza9PYrYYdx2hg4u2sjiBwC9X46g"})

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntry('2aTrIEfkdEieXPHWDAnvmx').then((entry) => {
          setMain(entry.fields.heroMain)
          setInfo(entry.fields.heroInfo)
          setSecondMain(entry.fields.heroSpanMain)

          console.log(entry.fields.heroMain)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries()
  }, [])

 
  return (
    <>
    <div className="hero">
      <div className='max'>
        <div className='hero__msg'>
          <h4>{main} <span> {secondMain} </span></h4>
          <p>{info}</p>
        </div>

        <Link
        to="features-section"
        smooth={true}
        duration={500}
      >
        <button className='hero__btn'>
          <img src={btn} alt=""/>
       </button>
       </Link>
      </div>
    </div>
    </>
  )
}

export default Hero