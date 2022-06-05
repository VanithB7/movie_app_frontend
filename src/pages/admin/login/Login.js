import { useState,useEffect } from "react";
import {loginRequestAction} from '../../../actions/authAction';
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
const Login = ()=> {
const {is_logged_in} =useSelector(state=>state.auth);
let navigate = useNavigate();
useEffect(() => {
   if (is_logged_in){
      return navigate("/admin/dashboard");
   }
},[is_logged_in]);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const dispatch= useDispatch();
const history = useNavigate();

const handleSubmit= (e)=>{
  e.preventDefault();
  const data={
    username,
    password
  };
   dispatch(loginRequestAction(data,history))
   
 
}

    return(
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div
        className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
      >
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
            
              className="object-cover w-full h-full"
              src="/admin_login.webp"
              alt="Office"
             
            />
           
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1
                className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
              >
                Login
              </h1>
          
              <form onSubmit={handleSubmit}>
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">UserName</span>
                <input
                  className="block w-full mt-1 px-4 py-2 rounded text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-[#b2385f] focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Jane Doe"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                    required
                />
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">Password</span>
                <input
                  className="block w-full mt-1 px-4 py-2 rounded text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-[#b2385f] focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder=""
                  type="password"
                   value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                   required
                />
              </label>

            
              <button
              type="submit"
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#b2385f] border border-transparent rounded-lg active:bg-[#b2385f] hover:bg-[#b2385f] focus:outline-none focus:shadow-outline-purple"
             
              >
                Log in
              </button>
</form>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Login;