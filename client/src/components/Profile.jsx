import { useLocation } from "react-router-dom";
import UseAuth from "../hooks/useAuth";
import { CgLogOut } from "react-icons/cg";
import { useState } from "react";


const Profile = () => {
    const {user, logOut} = UseAuth();
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    console.log(location);
    
    console.log(user,"profile");
    const {displayName, photoURL} = user;
    return (
    <div onClick={() => setShowDropdown(!showDropdown)} className="dropdown dropdown-end flex items-center text-black relative " >
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-12 h-12 rounded-full border-2">
          <img alt="profile" className="rounded-full" src={photoURL && photoURL} />
        </div>
      </div>
      <div tabIndex={0} className={`${showDropdown ? 'block' : "hidden"} absolute rounded-md top-20 right-2 bg-white p-4`}>
        <div className="">
            <img className={`w-16 mx-auto rounded-full`} src={photoURL && photoURL} alt="" /> 
        </div>
        <p className="font-bold text-lg text-center">{displayName}</p>
        <div className="flex justify-center items-center gap-4 text-white pt-4">
            <button onClick={logOut} className="btn bg-[#253745] py-3 px-5 rounded-lg font-bold flex items-center gap-2 border-none text-white">
                Logout
                <CgLogOut className="text-xl" />
            </button>
        </div>
      </div>
    </div>
    );
};

export default Profile;