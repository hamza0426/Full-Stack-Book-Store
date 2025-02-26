import { useEffect } from "react";
import axios from "axios"

const AllOrders = () => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect (() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-all-orders",
        { headers }
      );
    console.log(response);
    };
    fetch();
  }, []);
  return (
    <div>AllOrders</div>
  )
}

export default AllOrders