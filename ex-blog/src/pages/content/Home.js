import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Posts from '../../components/Posts'
import { getPostsThunk } from '../../modules/reducers/postReducer'

function Home() {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.post.postList)

  // 이게 뭐하는 거게?
    useEffect(() => {
      const fetch = async () => {
          try {
            dispatch(getPostsThunk())
          } catch(err){
            console.log(err);
          }
      };
      fetch();
      }, [])

    return (
      /* 이건 말이야~~~~~~
      ~~~~~~~~~
    ~~~~~~~~~~ */
        <div>
            {posts.map((post) => (
                <Posts key={post.id} props={post} />
            )) }
            <h1>
              홈입니다
            </h1>
            <Link to="loginForm">
              <button>로그인</button>
            </Link>
        </div>
    )
}

export default Home
