import React, {Component} from 'react';




class RestaurantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: this.props.customers,
      tables: [],
      bookings: [],
      date: new Date(),
      time: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewBooking = this.handleNewBooking.bind(this);
  }


  handleChange(date) {
    this.setState({
      date: date,
    });
  }

  componentWillMount() {
    console.log('will mount')
    const request = new Request();
    request.get('customers/')
      .then(res => {
        this.setState({customers: res._embedded.customers})
      })
    this.getTables();
  }


  getTables() {
    const request = new Request();
    request.get('restaurantTables/')
      .then(res => {
        this.setState({tables: res._embedded.restaurantTables})

        const allTables = this.state.tables

        for (const table of allTables) {
          table.taken = false;
        }

        this.setState({tables: allTables})
      })
  }


}


  export default RestaurantContainer;
