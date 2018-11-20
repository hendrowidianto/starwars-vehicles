import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';

class LoginForm extends React.Component {

    handleSignIn(e) {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        if(username === 'admin' && password === 'admin'){
        this.props.onSignIn(username, password)
        }
    }

    render() {
        const { classes } = this.props;

        return (
        <div className={classes}>
            <div className="Login">
            <form onSubmit={this.handleSignIn.bind(this)}>
                <h2>Please Login</h2>
                <input
                id="outlined-username-input"
                label="Username"
                className={classes}
                type="username"
                name="username"
                autoComplete="off"
                margin="normal"
                variant="outlined"
                fullWidth
                ref="username" 
                placeholder="Username"
                />
                <br />
                <input
                id="outlined-password-input"
                label="Password"
                className={classes}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                fullWidth
                ref="password" 
                placeholder="Password"
                />
                <br /><br />
                <Button variant="contained" color="primary" className={classes} fullWidth type="submit">
                    Login
                </Button>
            </form>
            </div>
        </div>
        );
    }
}

export default LoginForm
