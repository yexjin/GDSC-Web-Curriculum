import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Posts({props}) {
    const { id, title, content} = props
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={"/post/" + id} className="btn btn-primary">
                    상세보기
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Posts
