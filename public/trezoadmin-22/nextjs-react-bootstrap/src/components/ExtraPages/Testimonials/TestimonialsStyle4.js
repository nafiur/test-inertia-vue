"use client";

import { Row, Col, Card } from "react-bootstrap";
import Image from "next/image";

const TestimonialsStyle4 = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="px-4 pt-4 pb-1">
          <div className="mb-3 mb-lg-4">
            <h3 className="mb-0">Testimonials Style - 4</h3>
          </div>

          <Row>
            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <div 
                className="testimonials-card"
                style={{
                  background: "#f5f5f5",
                  marginBottom: "25px",
                  padding: "25px",
                  borderRadius: '10px', 
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div>
                    <Image
                      src="/images/user-68.jpg"
                      width={80}
                      height={80}
                      alt="user-image"
                      className="rounded-circle"
                    />
                  </div>

                  <div>
                    <h5
                      style={{
                        fontWeight: "700",
                        fontSize: "16px",
                        marginBottom: "6px",
                      }}
                    >
                      Sarah Johnson
                    </h5>

                    <p className="mb-0">Financial Manager</p> 
                  </div>
                </div>

                <div
                  className="ratings"
                  style={{
                    lineHeight: "1",
                    color: "#fe7a36",
                    fontSize: "16px", 
                    marginBottom: '15px'
                  }}
                >
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                </div>

                <p style={{ fontWeight: '500', fontStyle: 'italic' }}>
                  <q>
                    Statistics is the science of using data to make decisions.
                    This is relevant in almost all fields of work and there are
                    many opportunities for employment.
                  </q>
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <div 
                className="testimonials-card"
                style={{
                  background: "#f5f5f5",
                  marginBottom: "25px",
                  padding: "25px",
                  borderRadius: '10px', 
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div>
                    <Image
                      src="/images/user-69.jpg"
                      width={80}
                      height={80}
                      alt="user-image"
                      className="rounded-circle"
                    />
                  </div>

                  <div>
                    <h5
                      style={{
                        fontWeight: "700",
                        fontSize: "16px",
                        marginBottom: "6px",
                      }}
                    >
                      Michael Smith
                    </h5>

                    <p className="mb-0">Software Developer</p>
                  </div>
                </div>
                
                <div
                  className="ratings"
                  style={{
                    lineHeight: "1",
                    color: "#fe7a36",
                    fontSize: "16px", 
                    marginBottom: '15px'
                  }}
                >
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-half-fill mr-1" style={{color: "#fe7a36"}}></i>
                </div>
                
                <p style={{ fontWeight: '500', fontStyle: 'italic' }}>
                  <q>
                    Statistics is the science of using data to make decisions.
                    This is relevant in almost all fields of work and there are
                    many opportunities for employment.
                  </q>
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <div 
                className="testimonials-card"
                style={{
                  background: "#f5f5f5",
                  marginBottom: "25px",
                  padding: "25px",
                  borderRadius: '10px', 
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div>
                    <Image
                      src="/images/user-70.png"
                      width={80}
                      height={80}
                      alt="user-image"
                      className="rounded-circle"
                    />
                  </div>

                  <div>
                    <h5
                      style={{
                        fontWeight: "700",
                        fontSize: "16px",
                        marginBottom: "6px",
                      }}
                    >
                      Emily Brown
                    </h5>

                    <p className="mb-0">Web Developer</p> 
                  </div>
                </div>

                <div
                  className="ratings"
                  style={{
                    lineHeight: "1",
                    color: "#fe7a36",
                    fontSize: "16px", 
                    marginBottom: '15px'
                  }}
                >
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                  <i className="ri-star-fill mr-1" style={{color: "#fe7a36"}}></i>
                </div>

                <p style={{ fontWeight: '500', fontStyle: 'italic' }}>
                  <q>
                    Statistics is the science of using data to make decisions.
                    This is relevant in almost all fields of work and there are
                    many opportunities for employment.
                  </q>
                </p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default TestimonialsStyle4;