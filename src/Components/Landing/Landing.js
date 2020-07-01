import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class Landing extends Component {
    state = {
        items: [],
    };
    
    render() {
        return (
            <div>
                <h1>Welcome to Redux a Center</h1>
                <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                        <Carousel.Caption>
                            <h3>First slide in label</h3>
                            <p> blah blah blah </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="Second slide"
                    />
                        <Carousel.Caption>
                            <h3>Second slide in label</h3>
                            <p> blah blah blah </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="Third slide"
                    />
                        <Carousel.Caption>
                            <h3>Third slide in label</h3>
                            <p> blah blah blah </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
