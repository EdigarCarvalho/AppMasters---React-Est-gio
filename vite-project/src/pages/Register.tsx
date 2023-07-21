import AuthHeader from "../components/Authentication/AuthHeader"
import RegisterComponent from "../components/Authentication/RegisterComponent"
import { AuthPageStyle } from "../components/Authentication/style"

function Register(){
    return(<>

    <AuthHeader/>
    <AuthPageStyle>
       <RegisterComponent/>
    </AuthPageStyle>
    
    </>)
}

export default Register