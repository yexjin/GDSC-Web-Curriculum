import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function SaveForm({props}) {

    const [post, setPost] = useState({
        title: "",
        content: "",
    })

    const changeValue = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const submitPost = (e) => {
        e.preventDefault();
        fetch("http://18.191.121.226:8080/post", {
            method: "POST", 
            header: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(post)
        }).then(res => {
            console.log(1, res)
            if(res.status === 201) {
                return res.json()
            } else {
                return null
            }
        }).then(res => {
            if(res !== null) {
                props.history.push("/")
            } else {
                alert("글 등록에 실패하였습니다.")
            }
        })
    }
    return (
        <Form onSubmit= {submitPost}>
        <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={changeValue} name="title"/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control type="text" placeholder="Enter Content" name="content"/>
        </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}

export default SaveForm