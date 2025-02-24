import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const Settings = () => {

  const [ProfileData, setProfileData] = useState();
  const [Value, setValue] = useState({ address: "", email: "" });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const {name, value} = e.target;
    setValue({...Value, [name]: value});
  }

  //isme try catch lagana parega error alert message show krvane k liye
  const submitAddress = async () => {
    const res = await axios.put("http://localhost:1000/api/v1/update-address", Value, {headers});
    alert(res.data.message);
  } 

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:1000/api/v1/get-user-information", { headers });
      setProfileData(response.data);
      setValue({ address: response.data.address, email: response.data.email });
    }
    fetch();
  }, []);

  return (
    <>
      {!ProfileData && (<div className="w-full h-[100%] flex items-center justify-center"><Loader />{" "}</div>)}
      {ProfileData && (
        <div className="h=[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">Settings</h1>
          <div className="flex gap-12">
            <div className="">
              <label htmlFor="">Username</label>
              <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                {ProfileData.username}
              </p>
            </div>
            <div className="">
              <label htmlFor="">Email</label>
              <textarea name="email" rows={1} value={Value.email} onChange={change}
            className="p-2 rounded bg-zinc-800 mt-2 font-semibold"></textarea>
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="">Address</label>
            <textarea name="address" rows={5} value={Value.address} onChange={change}
            className="p-2 rounded bg-zinc-800 mt-2 font-semibold"></textarea>
          </div>
          <div className="mt-4 flex justify-end">
            <button onClick={submitAddress} className="bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400 transition-all duration-300">Update</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Settings
