import React, { Component } from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';

//components

//styles
import styles from './Events.module.scss';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: []
    };
      
      this.createTable = this.createTable.bind(this);
      this.getEvents = this.getEvents.bind(this);
      this.getEvents();  
    
      }
     
// make our API call and set our state to the events object for table
getEvents() {
          fetch("https://sttapi.herokuapp.com/events/?format=json")
          .then((res) => res.json())
            .then((myjson) => {
              this.setState({
              event: myjson
            });
            
          } )
}

       
// Builds our table with values from API after API is called upon

createTable = () => {
  if (this.state.event.length < 1) {
    let table = []
    table.push(
    <tr>
      <td>There are currently no events scheduled</td>
    </tr>
      )
      return table
  } else {
  if (this.state.event[0]) {
  let table = []
  // Outer loop to create parent
  for (let i = 0; i < this.state.event.length; i++) {
    let children = [];
    let children2 = [];
    let children3 = []
    //Inner loop to create children
      children.push(<td>{`${this.state.event[i].name}`}</td>);
      children2.push(<td className={styles.boxformat}>{`${moment(this.state.event[i].logdate).format('MMMM Do YYYY, h:mm a')}`}</td>);
      children3.push(<td>{`${this.state.event[i].address}`}</td>);
      table.push(<tr>{children}{children2}{children3}</tr>)
    }
  
    
  
  return table
    }  
  }
}











  render() {
    return (
        <div className={styles.eMain}>
        <h4 className={styles.eHead}>Upcoming Events</h4>
        
        <Table hover>
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Date / Time</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          { 
          this.createTable() 
          }
          

        </tbody>
      </Table>
        </div>
    );
  }
}





export default Events;