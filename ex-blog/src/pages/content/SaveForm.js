import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createPostThunk, getPostsThunk } from '../../modules/reducers/postReducer'
import { useNavigate } from 'react-router-dom';


function SaveForm({props}) {

    const [post, setPost] = useState({
        title: "",
        content: "",
    })
    const dispatch = useDispatch()

    const navigate = useNavigate();
    
    const changeValue = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const onReset = () => {
        setPost({
            title: '',
            content: ''
        })
    }

    const submitPost = (e) => {
        e.preventDefault();
        try{
            dispatch(createPostThunk(post))
            alert("글이 등록되었습니다.")
            onReset()
            // navigate(`/`)
        } catch(err) {
            alert("글 등록에 실패하였습니다.")
        }
    }


    return (
        <Form onSubmit= {submitPost}>
        <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={post.title} placeholder="Enter title" onChange={changeValue} name="title"/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control type="text" value={post.content} placeholder="Enter Content" onChange={changeValue} name="content"/>
        </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}

export default SaveForm