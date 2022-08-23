import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Posts from '../../components/Posts'
import { getPostsThunk } from '../../modules/reducers/postReducer'
import store from '../../modules/store'

function Home() {

  const dispatch = useDispatch()
  const posts = useSelector(store => store.post.postList.data)

    useEffect(() => {
        const fetch = async () => {
          try {
            dispatch(getPostsThunk())
            // console.log(posts.postList.data)
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
