import { signOut } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { toast } from "react-toastify";
import { auth } from "../../../config/firebase";
import { HeaderStyle } from "../../Header/style";

function AuthHeader() {
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

        <div>
          <a
           href="/" 
           className="text-header">
            home
          </a>
        </div>

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

export default AuthHeader;
