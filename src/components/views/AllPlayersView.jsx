import React from 'react';
import './styles/AllPlayersView.css';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllPlayersView = props => {
  return (
    <div className="all-players">
      {props.allStudents.map(player => (
        <div key={player.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{player.firstName} {player.lastName}</Card.Title>
            <Card.Text>
              Campus: 
            </Card.Text>
            <Button variant="primary">View Profile</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

AllPlayersView.propTypes = {
  allStudents: PropTypes.array.isRequired
};

export default AllPlayersView;
