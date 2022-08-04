import React from 'react';
import Rating from './Rating';
import { Card } from 'react-bootstrap';



const Product = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.data.imageUrl} />
                <Card.Body>
                    <Card.Title>{props.data.productName}</Card.Title>

                    <Card.Text>
                        {props.data.releasedDate}
                        <Rating
                            rating={props.data.rating} numOfReviews={props.data.numOfReviews}
                        />
                        <p>{props.data.description}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Product;