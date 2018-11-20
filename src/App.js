import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Table from './components/Table';
import ReactTable from './components/React-Table'
import LoginForm from './components/Login';
// import NavBar from './components/NavBar'
import FormAdd from './components/FormAdd'
import { BrowserRouter, Route, Link } from 'react-router-dom'


const Welcome = ({user})=> {
  // This is a dumb "stateless" component
  return (
    <div>
      Welcome <strong>{user.username}</strong>!
    </div>
  )
}

class App extends React.Component {
  
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }
  
  // App "actions" (functions that modify state)
  signIn(username, password) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut() {
    // clear out user from state
    this.setState({user: null})
  }
  
  render() {

    const { classes } = this.props;

    return (
      <BrowserRouter>
      <div>
        { 
          (this.state.user) ? 
            <div>
              {/* <NavBar /> */}
              <AppBar position="static">
                <Toolbar>
                  <Link to="/" style={{ textDecoration: 'none', color:'white' }}>
                    <Typography variant="h6" color="inherit" className={classes}>
                      <Welcome 
                        user={this.state.user} 
                      />
                    </Typography>
                  </Link>
                  <Link to="/FormAdd" style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="secondary" style={{ marginLeft: 13 }}>Insert Data</Button>
                  </Link>
                  <Button variant="contained" color="secondary" onClick={this.signOut.bind(this)} style={{ marginLeft: 13 }}>Log Out</Button>
                </Toolbar>
              </AppBar>              

              <Route exact path="/" render={() => (
                <ReactTable />
                // <Table />
              )} />
              <Route path="/FormAdd" component={FormAdd} />
            </div>
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
      </BrowserRouter>
    )
    
  }
  
}

export default App