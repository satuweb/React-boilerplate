import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = { userAuth: false };
    }
    handleLogin(e) {
        e.preventDefault();
        this.setState({ userAuth: true });
    }

    handleLogout(e) {
        e.preventDefault();
        this.setState({ userAuth: false });
    }
    render() {
        const userAuth = this.state.userAuth;
        let loginBtn;
        if (userAuth) {
            loginBtn = (
                <a href="#logout" onClick={this.handleLogout}>Login</a>
            );
        } else {
            loginBtn = (
                <a href="#login" onClick={this.handleLogin}>Logout</a>
            );
        }
        return (
            <div>
                {userAuth}
                {loginBtn}
            </div>
        );
    }
}
export default Login