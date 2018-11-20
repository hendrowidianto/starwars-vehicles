import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    signOut() {
        // clear out user from state
        this.setState({user: null})
    }

    render(){
        // const {onSignOut} = this.props

        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Link to="/FormAdd">
                        <Button color="inherit">Insert Data</Button>
                    </Link>
                    <Button variant="contained" color="secondary" onClick={this.signOut.bind(this)}>Log Out</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

// const mapStateToProps = (state) => {
//   return {
//     app: state.app, 
//   }
// }

// NavBar = connect(mapStateToProps)(NavBar)

export default NavBar