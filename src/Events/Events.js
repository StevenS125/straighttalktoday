import React, { Component } from 'react';
import { Table } from 'reactstrap';

//components

//styles
import styles from './Events.module.scss';





class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      event: [
        {
          name: "1",
          logdate: "2",
          address: "3"
        },
        {
          name: "4",
          logdate: "5",
          address: "6"
        }
      ] 
    };
      this.getApi = this.getApi.bind(this)


  }

  componentDidMount () {
this.getApi()

  }

    getApi () {
let self = this
 fetch("https://sttapi.herokuapp.com/events/?format=json")
    
  .then(function(res) {
    return res.json();
  })
  .then(function(myJson) {
      self.setState({

       event: JSON.stringify(myJson)
    })}
    )
    console.log(this.state);
  }
  
// After component mounts we build our values of events table   
  
 createTable = () => {
    let table = []
    // Outer loop to create parent
    for (let i = 0; i < this.state.event.length; i++) {
      let children = [];
      let children2 = [];
      let children3 = []
      //Inner loop to create children
        children.push(<td>{`${this.state.event[i].name}`}</td>);
        children2.push(<td>{`${this.state.event[i].logdate}`}</td>);
        children3.push(<td>{`${this.state.event[i].address}`}</td>);
        table.push(<tr>{children}{children2}{children3}</tr>)
      }
      //Create the parent and add the children
      
    
    return table
  }










  render() {
    return (
        <div className={styles.eMain}>
        <h4 className={styles.eHead}>{this.state.event.length}</h4>
        
        <Table hover>
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Date / Time</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          
        {this.createTable()}
          <tr>
            <td>Youth Summit</td>
            <td>October 6th 8:30AM-12:30PM</td>
            <td>Chestnut Ridge Middle School,<br></br> NY-45, Chestnut Ridge, NY</td>
          </tr>

        </tbody>
      </Table>
        </div>
    );
  }
}





export default Events;