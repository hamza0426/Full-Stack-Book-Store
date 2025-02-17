/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const BookCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <Link>
        <div className=" bg-neutral-300 rounded p-2 flex flex-col">
          <div className=" bg-zinc-600 rounded flex items-center justify-center">
            <img src={data.url} alt="/" className="h-[25vh]" />
          </div>
          <h2 className="mt-4 text-xl text-gray-900 font-semibold" >{data.title}</h2>
          <p className="mt-4 text-gray-900 font-semibold ">by {data.author}</p>
          <p className="mt-4 text-xl text-gray-900 font-semibold  ">{data.price}</p>
        </div>
      </Link>
    </>
  );
};

export default BookCard;
