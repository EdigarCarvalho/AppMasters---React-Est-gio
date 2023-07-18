import { useEffect, useState } from "react";
import { AuthStyle } from "./style";
import { auth } from "../../config/firebase";
import { 
   createUserWithEmailAndPassword,
   signOut ,
   signInWithEmailAndPassword,
   onAuthStateChanged} from "firebase/auth";


function Authenticantion() {
    const [ email , setEmail ] = useState<string>("");
    const [ password , setPassword ] = useState<string>("");

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("Usuário logado:", user.email);
        } else {
          console.log("Usuário desconectado");
        }
      });
  
      return () => unsubscribe();
    }, []);

    const register = async () => {
      try {
          await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      } catch (error) {
        console.log(error);
      }
    };
  
    const logIn = async () => {
      try {
          await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } catch (error) {
        console.log(error);
      }
    };
  
    const logOut = async () => {
      await signOut(auth);
    };

    console.log(auth.currentUser?.email);

    
    return (
    <>
      <AuthStyle>
        <input 
        type="email" 
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}/>
        <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={register}>Register</button>
        <button onClick={logIn}>Log In</button>
        <button onClick={logOut}>Log Out</button>
      </AuthStyle>
    </>
  );
}

export default Authenticantion;
