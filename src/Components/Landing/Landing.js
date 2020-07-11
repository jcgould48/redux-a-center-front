import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Axios from 'axios'
import './Landing.css'

export default class Landing extends Component {
    state = {
        items: [],
    };
    
    componentDidMount(){
        Axios.get('http://localhost:3001/api/items/getAllItems').then((response) => {
            console.log('itemData', response.data);
            this.setState({items: response.data})
        })
    }
    render() {
        return (
            <div>
                <br></br>
      <div className="logo-header">
      <img  className="main-logo" src="/images/main-logo-full.png" alt="Main Logo" />
        </div>
                {/* <h1>Welcome to Redux a Center</h1> */}
                <Carousel>  
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/couch.jpg"
                        alt="First slide"
                    />
                        <Carousel.Caption>
                            <h3>Look at this beautiful couch</h3>
                            <p> read the fine print </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/tv.jpg"
                        alt="Second slide"
                    />
                        <Carousel.Caption>
                            <h3>Try out the new UHD TV</h3>
                            <p> read the fine print</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/washer.jpg"
                        alt="Third slide"
                    />
                        <Carousel.Caption>
                            <h3>washing machine</h3>
                            <p> read the fine print</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

// import React, { Component } from 'react'

// export default class Landing extends Component {
//     render() {
//         return (
//             <div>
//                 hey
//             </div>
//         )
//     }
// }
