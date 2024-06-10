
import { useState } from 'react';

function SignInPage() {
    const [email, email] = useState('');
    const [password, password] = useState('');

    const submit = (e) => {
        e.preventDefault();
    };

    return (
        <form submit={submit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                />
            </div>
            <button type="submit">Sign In</button>
        </form>
    );
}

export default SignInPage;