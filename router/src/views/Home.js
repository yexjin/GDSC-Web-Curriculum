import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>
              홈입니다
            </h1>
            <Link to="login">
              <button>로그인</button>
            </Link>
        </>
    )
}

export default Home
