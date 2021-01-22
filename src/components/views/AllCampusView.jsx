import React from 'react';
import './styles/AllPlayersView.css';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllCampusView = props => {
  return (
      
    <div className="all-players">
    {console.log(props.allCampus)}
      {props.allCampus.map(player => (
        <div key={player.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{player.name} </Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary">View Campus</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

AllCampusView.propTypes = {
    allCampus: PropTypes.array.isRequired
  };
  


export default AllCampusView;
