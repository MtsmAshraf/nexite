import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import "./loader.css"

const Loader = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    },[])
  return (
    <div className={loaded ? "loader" + " " + "loaded": "loader"}>
        <FontAwesomeIcon icon={faLessThan} />
        <ul>
            <li />
            <li />
            <li />
        </ul>
        <FontAwesomeIcon icon={faGreaterThan} />
    </div>
  )
}

export default Loader