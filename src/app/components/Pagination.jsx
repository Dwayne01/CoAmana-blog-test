import React from 'react';
import {Container, Row} from 'react-bootstrap'


const Pagination = ({handleNext, handlePrevious}) => (
          <Container>
              <Row className="buttonCont">
                  <button className="btnPagination" onClick={() => handlePrevious()}>
                      Previous
                  </button>

                  <button className="btnPagination" onClick={() => handleNext()}>
                      Next
                  </button>
              </Row>
          </Container>
)

export default  Pagination