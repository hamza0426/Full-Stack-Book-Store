import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard/BookCard";
import Loader from "../components/Loader/Loader";

const AllBooks = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-all-books"
      );
      setData(response.data.data);
    };
    fetch();
  }, []);
  return (
    <div className=" bg-bg1 h-auto px-12 py-8 ">
      <h4 className="text-3xl text-primary">All Books</h4>
      {!Data && (
        <div className="flex items-center justify-center my-8">
          <Loader />{" "}
        </div>
      )}
      <div className=" my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllBooks;


// const AllBooks = () => {
//   return (
//     <div>AllBooks</div>
//   )
// }

// export default AllBooks