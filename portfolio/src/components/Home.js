import React from 'react';
import './Navigation.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./assets/profile.jpg/100px180" />
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          I recently completed an Edx Coding Bootcamp. My knowledge of programming grows more each day. I am currently seeking to integrate
          with the diverse community of software developers. Outside of the realm of technology,
          I frequent the outdoors and enjoy gardening, camping, hiking, and bicycle touring.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Home;