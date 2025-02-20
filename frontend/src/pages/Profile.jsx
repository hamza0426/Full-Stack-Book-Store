import { Outlet } from "react-router-dom"
import Sidebar from "../components/Profile/Sidebar"
import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
import axios from "axios"
import Loader from "../components/Loader/Loader"


const Profile = () => {
  // const isLoggedIn = useSelector();
  const [Profile, setProfile] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  // console.log(headers);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:1000/api/v1/get-user-information", { headers });
      setProfile(response.data)
      // console.log(response);
    }
    fetch();
  }, []);
  return (
    <div className="bg-zinc-800 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4 text-white">
      {!Profile && 
      <div className="w-full h-[100%] flex items-center justify-center"> <Loader /> 
      </div>
      }
      {Profile && <>
      <div className="w-full md:w-1/6">
      <Sidebar data= { Profile } />
      </div>
        <div className="w-full md:w-5/6"><Outlet /></div>
        </>
        }
    </div>
  )
}

export default Profile