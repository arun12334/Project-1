import React, { useState } from 'react';
import '../Pages/home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalSeats, setTotalSeats] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const movies = ['The Godfather', 'Fight Club', 'Angry Men', 'The Marvels'];
  const seatStatus = ['N/A', 'Selected', 'Occupied'];

  const seatBasePrice = 190;  
  const gstPercentage = 3;
  const cstPercentage = 2;  

  const handleMovieChange = (e) => {
    setSelectedMovie(e.target.value);
  };

  const handleSeatSelect = (row, col) => {
    const seatNumber = row * 6 + col + 1;

    // Calculate seat price including GST and CST
    const gstAmount = (seatBasePrice * gstPercentage) / 100;
    const cstAmount = (seatBasePrice * cstPercentage) / 100;
    const seatPrice = seatBasePrice + gstAmount + cstAmount;

    if (!selectedSeats.includes(seatNumber)) {
      setSelectedSeats([...selectedSeats, seatNumber]);
      setTotalSeats(totalSeats + 1);
      setTotalPrice(totalPrice + seatPrice);
    } else {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      setTotalSeats(totalSeats - 1);
      setTotalPrice(totalPrice - seatPrice);
    }
  };

  const handleBookClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    window.location.reload();
  };

  return (
    <div>
      <div className="headings-page">
      <header>
          <h1 style={{ color: 'blue' }}>Ticket Booking Page</h1>
          <Link to="/login" className="back-button">
            Log Out
          </Link>
          <label>Select Movie:</label>
          <select value={selectedMovie} onChange={handleMovieChange}>
            <option value="">Select a Movie</option>
            {movies.map((movie, index) => (
              <option key={index} value={movie}>
                {movie}
              </option>
            ))}
          </select>
        </header>
      </div>

      {selectedMovie && (
        <div>
          <h2>Selected Movie: {selectedMovie}</h2>

          <div>
            <h3>Seat Status:</h3>
            {seatStatus.map((status, index) => (
              <span key={index}>{status} </span>
            ))}
          </div>

          <div>
            <h3>Select Seats:</h3>
            <table>
              <tbody>
                {[...Array(8)].map((_, row) => (
                  <tr key={row}>
                    {[...Array(6)].map((_, col) => (
                      <td
                        key={col}
                        onClick={() => handleSeatSelect(row, col)}
                        style={{
                          backgroundColor: selectedSeats.includes(row * 6 + col + 1) ? 'green' : 'white',
                        }}
                      >
                        {row * 6 + col + 1}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3>Selected Seats:</h3>
            <table>
              <thead>
                <tr>
                  <th>Seat Number</th>
                  <th>Status</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {selectedSeats.map((seatNumber) => {
                  const gstAmount = (seatBasePrice * gstPercentage) / 100;
                  const cstAmount = (seatBasePrice * cstPercentage) / 100;
                  const seatPrice = seatBasePrice + gstAmount + cstAmount;

                  return (
                    <tr key={seatNumber}>
                      <td>{seatNumber}</td>
                      <td>Selected</td>
                      <td>₹{seatPrice.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div>
            <p>Total Seats: {totalSeats}</p>
            <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
          </div>

          <button onClick={handleBookClick}>Book</button>
        </div>
      )}

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <p>You have successfully booked {totalSeats} seats!</p>
            <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
