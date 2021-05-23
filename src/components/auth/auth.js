import { useState } from "react";
import LoginPopup from "./login";
import RegisterPopup from "./register";

let Auth = (props) => {
  const { setOpenCloseAuth } = props;
  const [registerPopup, setRegisterPopup] = useState(true);


  return (
    <div className="login-popup ">
      {registerPopup ? (
        <>
        <LoginPopup
          setOpenCloseAuth={setOpenCloseAuth}
          setRegisterPopup={() => setRegisterPopup(!registerPopup)}/>
          

        </>
      ) : (
        <RegisterPopup
          setOpenCloseAuth={setOpenCloseAuth}
          setRegisterPopup={() => setRegisterPopup(!registerPopup)}
        />
      )}  

      {/* <LoginPopup setOpenCloseAuth={setOpenCloseAuth}/> */}
    </div>
  );
};



export default Auth;
