import React from 'react';
import {Container, Row, Col,} from 'react-bootstrap'



const  Cards = ({blog, history}) => (
          <Container>
            <Row>
               {blog.map((data, ind) => (
                <Col key={ind}  md="4">
                  <div onClick={() => history.push({pathname: `/post/${data.slug}`, state: {data} })} className="cards"> 
                      <div className="imgCard">
                         <img alt="featured" className="img" src={data.featured_image}/>
                      </div> 
                      
                      <div className="cardBody">
                            <h2  align="center" className="cardTile">{data.title.rendered}</h2>
                            <p align="center" className="cardSubtitle">{data.excerpt.rendered}</p>
                      </div>
                  </div>
               </Col>))}
            </Row>
          </Container>
        );
export default Cards