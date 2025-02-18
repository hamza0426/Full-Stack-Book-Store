// const Login = () => {
//   return (
//     <div className="min-h-screen py-12" style={{ backgroundColor: '#FEFAE0' }}>
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8">
//         <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: '#DDA15E' }}>
//           Welcome Back
//         </h1>
        
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#283618' }}>
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 block w-full rounded-md border-2 shadow-sm p-2 focus:outline-none focus:ring-2"
//               style={{ 
//                 borderColor: '#606C38',
//                 backgroundColor: '#FEFAE0',
//                 focusBorderColor: '#DDA15E'
//               }}
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium" style={{ color: '#283618' }}>
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 block w-full rounded-md border-2 shadow-sm p-2 focus:outline-none focus:ring-2"
//               style={{ 
//                 borderColor: '#606C38',
//                 backgroundColor: '#FEFAE0',
//                 focusBorderColor: '#DDA15E'
//               }}
//             />
//             <p className="text-xs mt-1" style={{ color: '#BC6C25' }}>
//               (Must be at least 6 characters)
//             </p>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 px-4 rounded-md font-medium text-white hover:opacity-90 transition-opacity duration-200"
//             style={{ backgroundColor: '#DDA15E' }}
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="mt-6 text-center text-sm" style={{ color: '#283618' }}>
//           Don't have an account?{' '}
//           <a href="/sign-up" className="font-medium hover:underline" style={{ color: '#BC6C25' }}>
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




import { useState } from "react";
import Loader from "../components/Loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login successful! (Just frontend, no backend yet)");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFAE0]">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-[#DDA15E] mb-6">
          Login to Your Account
        </h2>
        {loading && (
          <div className="flex items-center justify-center my-4">
            <Loader />
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#DDA15E] text-white font-semibold py-2 rounded-lg hover:bg-[#BC6C25] transition-all"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/sign-up" className="text-[#DDA15E] hover:text-[#BC6C25]">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
