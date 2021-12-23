import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import deliverBoy from "../../Images/delivery-man.jpg";
import "./Documents.css";
const Documents = () => {
  return (
    <>
      <Container>
        <div>
          <Row>
            <Col sm={6}>
              <div>
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginTop: "60px",
                    textAlign: "left",
                  }}
                >
                  Local Delivery Service
                </h5>
              </div>
              <div>
                <h1
                  style={{
                    fontSize: "50px",
                    fontWeight: "600",
                    textAlign: "left",
                    lineHeight: "1.1em",
                    color: "#000000",
                  }}
                >
                  Reliable Delivery for <br /> Businesses and <br />
                  Customers.
                </h1>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    textAlign: "left",
                    lineHeight: "1.3em",
                  }}
                >
                  No more searching for courier. Now you can use Zembargo as
                  Your cheap and reliable local delivery service.
                </h4>
              </div>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <Button
                  style={{
                    fontSize: "22px",
                    marginTop: "15px",
                    padding: "7px 25px",
                  }}
                  variant="outline-dark"
                >
                  Get A Quote
                </Button>
              </div>
            </Col>
            <Col sm={6}>
              <div>
                <img
                  className="image img-fluid"
                  src="https://zembargo.co.uk/wp-content/uploads/2021/07/Asset-2ldpi.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: "180px" }}>
          <Row>
            <Col sm={12}>
              <div>
                <h4
                  style={{
                    fontSize: "35px",
                    fontWeight: "600",
                    lineHeight: "1.3em",
                    textAlign: "left",
                    color: "#000000",
                  }}
                >
                  Reliability is Our First Priority
                </h4>
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    lineHeight: "1.3em",
                    textAlign: "left",
                    color: "#4B4B4B",
                  }}
                >
                  We offer the lowest price with the highest value through our
                  innovative logistics design. We deliver your courier at the
                  right location at the right time, currently in 50+ districts
                  throughout the country. <br /> <br />
                  We offer the lowest price with the highest value through our
                  innovative logistics design. We deliver your courier at the
                  right location at the right time, currently in 50+ districts
                  throughout the country.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="mt-4">
          <Container>
            <Row>
              <Col sm={6}>
                <img
                  className="w -100 img-fluid"
                  src="https://zembargo.co.uk/wp-content/uploads/2021/07/Asset-2ldpi.png"
                  alt=""
                />
              </Col>
              <Col sm={6} style={{ marginTop: "40px" }}>
                <h6>
                  <i class="fas fa-arrow-alt-circle-right"></i>Live Delivery
                  Status
                </h6>
                <h6>
                  <i class="fas fa-arrow-alt-circle-right"></i>Cheap Prices
                </h6>
                <h6>
                  <i class="fas fa-arrow-alt-circle-right"></i>Cheap Prices
                </h6>
                <h6>
                  <i class="fas fa-arrow-alt-circle-right"></i>Professional &
                  Friendly
                </h6>
                <h6>
                  <i class="fas fa-arrow-alt-circle-right"></i>Professional &
                  Friendly
                </h6>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ marginTop: "180px" }}>
          <Container>
            <Row>
              <Col sm={5}>
                <h2
                  style={{
                    fontSize: "35px",
                    fontWeight: "600",
                    color: "#000000",
                    textAlign: "left",
                    lineHeight: "1.3em",
                  }}
                >
                  Reliability is Our First Priority
                </h2>
                <div>
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "500",
                      color: "#4B4B4B",
                      textAlign: "left",
                      lineHeight: "1.3em",
                    }}
                  >
                    We offer the lowest price with the highest value through our
                    innovative logistics design. We deliver your courier at the
                    right location at the right time, currently in 50+ districts
                    throughout the country.
                  </p>
                </div>
              </Col>
              <Col sm={7}>
                <img
                  className=" img-fluid"
                  style={{ width: "490px", heiht: "326px" }}
                  src={deliverBoy}
                  alt=""
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Documents;
