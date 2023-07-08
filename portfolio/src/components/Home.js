import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import profile from '../../images/profile.png';

function Home() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile} />
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          I recently completed an Edx Coding Bootcamp. My knowledge of programming grows more each day. I am currently seeking to integrate
          with the diverse community of software developers. Outside of the realm of technology,
          I frequent the outdoors and enjoy gardening, camping, hiking, and bicycle touring.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;