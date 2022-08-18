import React,{ useEffect, useState } from 'react'
import Posts from '../../components/Posts'

function Home() {

    const [posts, setPosts] = useState([]);

    // 함수 실행 시 최초
    // + 상태값(setPosts)가 변경될 때마다 실행 => 어디에도 의존하지 않는다는 []을 적어줘야함.
    useEffect(() => {
        fetch("http://18.191.121.226:8080/post").then(res => res.json()).then(res => {
            console.log(1, res)
            setPosts(res)
        })

    }, [])
    return (
        <div>
            {posts.map((post) => (
                <Posts key={post.id} props={post} />
            )) }
        </div>
    )
}

export default Home
