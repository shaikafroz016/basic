import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Location = props => (
  <tr>
    <td>{props.location.city}</td>
    <td>{props.location.description}</td>
    <td>{props.location.duration}</td>
    <td>{props.location.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.location._id}>edit</Link> | <a href="#delete" onClick={() => { props.deleteLocation(props.location._id) }}>delete</a>
    </td>
  </tr>
)

export default class Locationlist extends Component {
  constructor(props) {
    super(props);

    this.deleteLocation = this.deleteLocation.bind(this)

    this.state = {locations: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/locations/')
      .then(response => {
        this.setState({ locations: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteLocation(id) {
    axios.delete('http://localhost:5000/locations/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      locations: this.state.locations.filter(el => el._id !== id)
    })
  }

  locationList() {
    return this.state.locations.map(currentlocation => {
      return <Location location={currentlocation} deleteLocation={this.deleteLocation} key={currentlocation._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Avalabe Location</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>City</th>
              <th>Shop Name</th>
              <th>Distance</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.locationList() }
          </tbody>
        </table>
      </div>
    )
  }
}