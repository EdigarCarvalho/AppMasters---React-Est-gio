import { createUserWithEmailAndPassword } from "firebase/auth";
import RegisterImage from "../../../assets/register.svg";
import { CenterComponentStyle } from "../style";
import { useState } from "react";
import { auth } from "../../../config/firebase";
import { AuthPropsPages } from "..";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FirebaseError } from "@firebase/util";

function RegisterComponent({ switchPage , setSwitchPage} : AuthPropsPages) {
    const navigate = useNavigate();
    const [ email , setEmail ] = useState<string>("");
    const [ password , setPassword ] = useState<string>("");

    const register = async () => {
      try {
          await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate('/');
        toast('🥳🥳 Welcome to our platform!')
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
        <h3>Register Account</h3>
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

        <button onClick={register} >Register</button>
        <p>Already have an account? 
            <a onClick={() => setSwitchPage(!switchPage)}> log in</a>
        </p>

      </div>

      <div className="right-div">
        <img src={RegisterImage} alt="test" />
      </div>
    </CenterComponentStyle>
  );
}

export default RegisterComponent;
