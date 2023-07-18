import { createUserWithEmailAndPassword } from "firebase/auth";
import RegisterImage from "../../../assets/register.svg";
import { CenterComponentStyle } from "../style";
import { useState } from "react";
import { auth } from "../../../config/firebase";
import { AuthPropsPages } from "..";
import { useNavigate } from "react-router-dom";

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
      } catch (error) {
        console.log(error);
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
