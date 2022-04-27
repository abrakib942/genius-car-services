import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import useServiceDetail from "../../hooks/useServiceDetail";
import auth from "../../Firebase.init";
import { toast } from "react-toastify";
import axios from "axios";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      name: user.name,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    console.log(order);

    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;

      if (data.insertedId) {
        toast("your order is booked!");
        event.target.reset();
      }
    });
  };

  return (
    <div className="w-50 mx-auto">
      <h2> your booking: {service.name} </h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          value={user.displayName}
          name="name"
          placeholder="name"
          required
        />
        <input
          className="w-100 mb-2"
          type="email"
          value={user.email}
          name="email"
          placeholder="Email"
          required
          readOnly
          disabled
        />
        <input
          className="w-100 mb-2"
          type="text"
          value={service.name}
          name="service"
          placeholder="service"
          required
        />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="address"
          required
        />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="phone"
          required
        />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
