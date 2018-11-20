import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  menu: {
    width: 400,
  },
});

const classies = [
  {
    value: '0',
    label: 'Please Select',
  },
  {
    value: 'wheeled',
    label: 'Wheeled',
  },
  {
    value: 'repulsorcraft',
    label: 'Repulsorcraft',
  },
  {
    value: 'starfighter',
    label: 'Starfighter',
  },
  {
    value: 'airspeeder',
    label: 'Airspeeder',
  },
  {
    value: 'space',
    label: 'Space/Planetary Bomber',
  },
  {
    value: 'assault',
    label: 'Assault Walker',
  },
  {
    value: 'walker',
    label: 'Walker',
  },
  {
    value: 'sail',
    label: 'Sail Barge',
  },
];

class FormAdd extends React.Component {
  state = {
    length: '0',
    class: '0',
    crew: '0',
    passengers: '0',
    cargo: '0',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <div style={{ paddingLeft: 16, paddingRight: 16 }}>
            <h2 style={{ marginLeft: 7 }}>Insert Data</h2>
            <form className={classes.container} noValidate autoComplete="off" onSubmit={(e) => { e.preventDefault(); alert('Data Inserted!'); this.props.history.push('/') }}>
                <TextField
                    label="Vehicle Name"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                /><br />
                <TextField
                    label="Model"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                /><br />
                <TextField
                    label="Manufacturer"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                /><br />
                <TextField
                    label="Length"
                    value={this.state.length}
                    onChange={this.handleChange('length')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                /><br />
                <TextField
                    select
                    label="Class"
                    className={classes.textField}
                    value={this.state.class}
                    onChange={this.handleChange('class')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                >
                    {classies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField><br />
                <TextField
                    label="Crew"
                    value={this.state.crew}
                    onChange={this.handleChange('crew')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                /><br />
                <TextField
                    label="Passengers"
                    value={this.state.passengers}
                    onChange={this.handleChange('passengers')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                /><br />
                <TextField
                    label="Cargo"
                    value={this.state.cargo}
                    onChange={this.handleChange('cargo')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                /><br /><br />
                <Button variant="contained" color="primary" type="submit" style={{ marginLeft: 7 }}>Submit</Button>
                <Button variant="contained" color="secondary" type="reset" style={{ marginLeft: 13 }}>Reset</Button>
            </form>
        </div>
    );
  }
}

FormAdd.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormAdd);