import Button from "react-bootstrap/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";

const News = (props) => {
  const { title, description, urlToImage, url } = props.news;
  return (
    <Col>
      <Card style={{ width: "28rem" }} className="h-100 shadow">
        <Card.Img
          style={{ height: "20rem" }}
          variant="top"
          src={urlToImage}
          fluid
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center border-0">
          <Button href={url} target="_blank" className="w-100" variant="danger">
            Learn more
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default News;
