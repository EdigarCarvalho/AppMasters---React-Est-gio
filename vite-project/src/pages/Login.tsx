import AuthHeader from "../components/Authentication/AuthHeader";
import LoginComponent from "../components/Authentication/LoginComponent";
import { AuthPageStyle } from "../components/Authentication/style";

function Login(){


    return(<>

    <AuthHeader/>
    <AuthPageStyle>
       <LoginComponent/>
    </AuthPageStyle>
    
    </>)
}

export default Login