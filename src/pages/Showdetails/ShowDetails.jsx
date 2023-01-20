import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./showDetails.scss";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleBookTicket = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    // code to handle form submission and ticket booking
  };

  return (
    <div className="showInfo">
      {isLoading ? (
        <img src="https://cdn-icons-png.flaticon.com/512/4461/4461665.png" alt="Loading" />
      ) : show ? (
        <div className="details">
          <div className="info">
            <img
              src={
                show.image && show.image.medium
                  ? show.image.medium
                  : "path/to/default-image"
              }
              alt={show.name}
            />
            <h1> {show.name} </h1>
            <p>{show.summary} </p>
          </div>
          <div className="bookBtn">
            <button onClick={() => setFormOpen(true)}>Book a Ticket</button>
            {formOpen && (
              <form onSubmit={handleBookTicket}>
                <input type="text" value={show.name} readOnly />
                <input type="text" placeholder="Your name" name="name" />
                <input type="text" placeholder="Your email" name="email" />
                <input
                  type="text"
                  placeholder="Your phone number"
                  name="phone"
                />
                <button type="submit">Book</button>
                <button onClick={() => setFormOpen(false)}>Cancel</button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ShowDetails;
