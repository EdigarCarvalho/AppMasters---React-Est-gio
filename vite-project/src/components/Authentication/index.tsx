import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { onAuthStateChanged} from "firebase/auth";
import { AuthPageStyle } from "./style";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";

export interface AuthPropsPages{
  switchPage: boolean;
  setSwitchPage : React.Dispatch<React.SetStateAction<boolean>>;
}

function Authenticantion() {
    const [switchPage, setSwitchPage] = useState<boolean>(true);

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

  
    // const logOut = async () => {
    //   await signOut(auth);
    // };

    // console.log(auth.currentUser?.email);\
    
    return (
      <AuthPageStyle>
        { switchPage && <LoginComponent switchPage={switchPage} setSwitchPage={setSwitchPage}/> }
        { !switchPage && <RegisterComponent switchPage={switchPage} setSwitchPage={setSwitchPage}/>}
      </AuthPageStyle>


  );
}

export default Authenticantion;
