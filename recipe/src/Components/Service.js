import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/services.css';

export default function Services() {
  const services = [
    {
      title: "Recipe Recommendations",
      description: "Personalized recipe suggestions based on your preferences and dietary needs.",
    },
    {
      title: "Meal Planning",
      description: "Weekly meal plans and grocery lists with caloric and nutritional information.",
    },
    {
      title: "Cooking Tips and Tricks",
      description: "Step-by-step instructions, cooking videos, and expert tips.",
    },
    {
      title: "Ingredient Information",
      description: "Detailed information about ingredients, including nutritional facts and storage tips.",
    },
    {
      title: "Dietary Needs and Preferences",
      description: "Recipes for vegan, vegetarian, gluten-free, and other dietary restrictions.",
    },
    {
      title: "Interactive Features",
      description: "Live chat support, user reviews, and a personal recipe collection.",
    },
    {
      title: "Subscription Services",
      description: "Premium access to exclusive recipes and personalized consultations.",
    },
    {
      title: "Community Features",
      description: "Recipe sharing, cooking challenges, and community forums.",
    },
  ];

  return (
    <Container className="services-container">
      <h1 className="services-title">Our Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="service-card">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
