import React, { Component } from 'react';
import { Table } from 'reactstrap';

//components

//styles
import styles from './Events.module.scss';





class Events extends Component {

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
          <tr>
            <td>Youth Summit</td>
            <td>October 6th 8:30AM-12:30PM</td>
            <td>Chestnut Ridge Middle School,<br></br> NY-45, Chestnut Ridge, NY</td>
          </tr>
          <tr>
            <td>Workshop : Securing the Bag, Becoming Money Smart <br></br>Investing in Real Estate Outside of New York Part 1</td>
            <td>October 6th 11:00AM (45 mins)</td>
            <td>Chestnut Ridge Middle School,<br></br> NY-45, Chestnut Ridge, NY</td>
          </tr>
          <tr>
            <td>Youth Summit</td>
            <td>October 11th 8:30AM-12:30PM</td>
            <td>Chestnut Ridge Middle School,<br></br> NY-45, Chestnut Ridge, NY</td>
          </tr>
          <tr>
            <td>Workshop : Securing the Bag, Becoming Money Smart <br></br>Investing in Real Estate Outside of New York Part 2</td>
            <td>October 11th 11:00AM (45 mins)</td>
            <td>Chestnut Ridge Middle School<br></br> NY-45, Chestnut Ridge, NY</td>
          </tr>
        </tbody>
      </Table>
        </div>
    );
  }
}





export default Events;