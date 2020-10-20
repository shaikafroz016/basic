import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditLocation extends Component {
  constructor(props) {
    super(props);

    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      city:'',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/locations/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          city:response.data.city,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }


  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const location = {
      city:this.state.city,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(location);

    axios.post('http://localhost:5000/locations/update/' + this.props.match.params.id, location)
      .then(res => console.log(res.data));

    window.location = '/stores';
  }

  render() {
    return (
    <div>
      <h3>Edit Location</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>City:</label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.city}
              onChange={this.onChangeCity}
              />
        </div>
        <div className="form-group"> 
          <label>Shop Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Distance: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Save" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}