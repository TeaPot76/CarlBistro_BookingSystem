import React from 'react';
import Request from "../helpers/Request";

const NewBookingForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();

    const booking = {
        "date": event.target.date.value,
        "time": event.target.time.value,
        "partySize": event.target.partySize.value,
        "booker": null,
        "seatingTable": null

    }

    const booker = {
      "name": event.target.name.value,
      "phone": event.target.phone.value,
    }


    // componentDidMount() {
    //   const url = 'http://localhost:8080/bookings';
    //   post(url)
    //     .then(res => res.json())
    //     .then((allBookings) => {
    //         this.setState({
    //             bookings: allBookings}
    //           );
    //         })
    //     }

  //   const req = new Request()
  //   req.post('/bookings', booker)
  //     .then(data => data.json())
  //     .then((newBooker) => {
  //       booking.booker = "http://localhost:8080/bookings/" + newBooker.id
  //       return booking;
  //     })
  //     .then(booking => props.handleBookingPost(booking));
  // }


      return (
        <div>
          <form className="booking-form" onSubmit={handleSubmit}>
          <fieldset><legend>Add Booking</legend>
            <label htmlFor="startTime"><span>Choose Table:</span>
            <select name = "startTime" className= "start-time">
              <option>table1</option>
              <option>table2</option>
              <option>table3</option>
              <option>table4</option>
              <option>table5</option>
            </select>
            </label>
            <label htmlFor="name"><span> Name:</span>
              <input type="text"  className= "name" name="name" required/>
            </label>
            <label htmlFor="phone"><span>Phone Number:</span>
              <input type="text" className= "phone" name="phone" required/>
            </label>
            <label htmlFor="date"><span>Date:</span>
              <input type="date" className= "date" name="date" placeholder="Enter Date" required/>
            </label>
            <label htmlFor="time"><span>Time:</span>
              <input type="time" className= "time" name="time"  placeholder="Enter Time" required/>
            </label>
            <label htmlFor="partySize"><span>Number of Guests:</span>
              <input type="number" className="partySize" name="partySize" min="1" max="50" required/>
            </label>
             <label htmlFor="seatingTable"><span>Seating Table:</span>
              <input type="number" className="seatingTable" name="seatingTable"  required/>
              </label>

            </fieldset>
            <input type="submit" value="Save" id="save" />
            <input type="button" value="Go Back" id="go-back" onClick = { () =>  window.location='/reservations'}/>
          </form>
        </div>
    )

}
// 
// export default NewBookingForm;
