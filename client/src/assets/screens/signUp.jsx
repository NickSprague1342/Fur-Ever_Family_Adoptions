//==============================
// this page is the react portion of the sign up page
// where users can sign up for our app
// this page is a little more complex that the sign in because we needed to be able to store client information
//===============================
import { useState } from 'react';
import AppNavbar from '../components/React/Navbar';

function AppSignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Fur-Ever Family Adoptions</h1>
            <AppNavbar />
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default AppSignUp;