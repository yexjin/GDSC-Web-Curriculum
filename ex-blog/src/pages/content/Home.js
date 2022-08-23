import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Posts from '../../components/Posts'
import { getPostsThunk } from '../../modules/reducers/postReducer'

function Home() {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.post.postList)

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
        <div>
            {posts.map((post) => (
                <Posts key={post.id} props={post} />
            )) }
        </div>
    )
}

export default Home
