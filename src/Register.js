import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
});
class  Register extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email:'',
      password: '',
      user_register_details:[],
  };
  this.onSubmit = this.onSubmit.bind(this);
}

onSubmit = (e) => {
  e.preventDefault();    
  const userCredential = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
  }
  if (userCredential!=null) {
    this.state.user_register_details.push(userCredential);
    localStorage.setItem("userCredential",JSON.stringify(this.state.user_register_details));  
    this.props.history.push('/'); 
  } else {
    this.props.history.push('/register');
  }
}
  render() {
    const { classes } = this.props;
    const { username,email, password } = this.state;
    return (
      <div>
     <Grid container>
                    <Grid item xs={12} sm={12} md={9} container direction="row"  justify="center" alignItems="center">
                    <Grid item md={6}>
                     <h2>Register </h2>
                    <h4>Register to continue</h4>
                    <form onSubmit={this.onSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            value={username}
                            required
                            fullWidth
                            id="uname"
                            placeholder="User Name"
                            name="uname"
                            autoFocus
                            InputProps={{
            
                            }}
                            onChange = {(e) => this.setState({username: e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            value={email}
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            placeholder="email"
                            type="email"
                            id="email"
                            InputProps={{

                            }}
                            onChange = {(e) => this.setState({email:e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            value={password}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            placeholder="Password"
                            type="password"
                            id="password"
                            InputProps={{

                            }}
                            onChange = {(e) => this.setState({password:e.target.value})}
                        />
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="primary" type="submit" className={classes.button}>Register</Button>  
                    </form>
                    </Grid>
                </Grid>
                </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Register);
