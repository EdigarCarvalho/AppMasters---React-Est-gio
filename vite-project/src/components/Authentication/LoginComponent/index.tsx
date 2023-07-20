
import { useState } from "react";
import LoginImage from "../../../assets/login.svg";
import { CenterComponentStyle } from "../style";
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { FirebaseError } from "@firebase/util";
import { AuthPropsPages } from "..";

function LoginComponent( { switchPage , setSwitchPage} : AuthPropsPages) {
    const navigate = useNavigate();
    const [ email , setEmail ] = useState<string>("");
    const [ password , setPassword ] = useState<string>("");

    const logIn = async () => {
      try {
          await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate('/');
        toast('😀 Welcome back!')
      } catch (error) {
        if (error instanceof FirebaseError) {
          const errorCode = error.code;
          toast.error(`Error: ${errorCode}`);
        }
      }
    };

  return (
    <CenterComponentStyle>
      
      <div className="left-div">
        <h3>Login</h3>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={logIn}>Log In</button>

        <p>Not have an account yet? 
            <a onClick={() => setSwitchPage(!switchPage)}> register</a>
        </p>

      </div>

      <div className="right-div">
        <img src={LoginImage} alt="test" />
      </div>
    </CenterComponentStyle>
  );
}

export default LoginComponent;
