import { HeaderStyle } from "./style";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { toast } from "react-toastify";

function Header() {
  const logOut = async () => {
    try {
      await signOut(auth);
      toast('😭😭 bye bye!')
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error.code;
        toast.error(`Error: ${errorCode}`);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <HeaderStyle>
      <a href="/" className="site-name">
        GamesMaster
      </a>

      {!auth.currentUser?.email && (
        <div>
          <a
           href="/auth" 
           className="text-header">
            register
          </a>
          <a 
          href="/auth" 
          className="text-header">
            login
          </a>
        </div>
      )}
      {auth.currentUser?.email && (
        <div>
          <a href="/" className="text-header" onClick={logOut}>
            logout
          </a>
        </div>
      )}
    </HeaderStyle>
  );
}

export default Header;
