import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <h2>Home Pages</h2>

      <Link to="/album">
        <button>Go to albums</button>
      </Link>

      <Link to="/favorite">
        <button>Go to favorite</button>
      </Link>
    </>
  )
}

export default Home