import React from 'react'
import { Link } from 'react-router-dom'

const MovieGrid = () => {
  return (
    <div className="grid-container ">
        <button>
    <Link to={"/movie-1"}>
      <div className="grid-item item1 text">
        <img src={`/assets/1.jpg`} className="filmposter" alt="playlogo" />
        <br /> A New Hope (1997)
      </div>
    </Link>
    </button>
    <button>
    <Link to={"/movie-2"}>
      <div className="grid-item item2 text">
        <img src={`/assets/2.jpg`} className="filmposter" alt="playlogo" />
        <br /> The Empire Strikes Back (1980)
      </div>
      </Link>
    </button>
    <button>
    <Link to={"/movie-3"}>
      <div className="grid-item item3 text">
        <img src={`/assets/3.jpg`} className="filmposter" alt="playlogo" />
        <br />
        Return of the Jedi (1983)
      </div>
      </Link>
    </button>

    <button>
    <Link to={"/movie-4"}>
      <div className="grid-item item4 text">
        <img src={`/assets/4.jpg`} className="filmposter" alt="playlogo" />
        <br />
        The Phantom Menace (1999)
      </div>
      </Link>
    </button>
    <button>
    <Link to={"/movie-5"}>
      <div className="grid-item item5 text">
        <img src={`/assets/5.jpeg`} className="filmposter" alt="playlogo" />
        <br />
        Attack of the Clones (2002)
      </div>
      </Link>
    </button>
    <button>
    <Link to={"/movie-6"}>
      <div className="grid-item item6 text">
        <img src={`/assets/6.jpg`} className="filmposter" alt="playlogo" />
        <br /> Revenge of the Sith (2005)
      </div>
      </Link>
    </button>
    
  </div>
  )
}

export default MovieGrid