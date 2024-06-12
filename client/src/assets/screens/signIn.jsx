import AppNavbar from "../components/React/Navbar"
import AppLogIn from "../components/auth/signIn"



function AppSignIn() {
    return (
        <div>
            <h1>Fur-Ever Family Adoptions</h1>
            <AppNavbar />
            <h2>Sign-In</h2>
            <AppLogIn />
        </div>
    )
}

export default AppSignIn

//==============================
// this page is the react portion of the sign in page
// where users can sign up for our app
//===============================