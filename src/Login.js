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
class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
  };
  this.onSubmit = this.onSubmit.bind(this);
}

onSubmit = (e) => {
  e.preventDefault();     
  const userCredential = {
      username: this.state.username,
      password: this.state.password
  }
  let loginData = JSON.parse(localStorage.getItem("userCredential"));
  if (loginData!==null) {
    for (let login in loginData) {
        if (loginData[login].username === userCredential.username && loginData[login].password === userCredential.password) {
            this.props.history.push('/dashboard');  
        }else{
            this.props.history.push('/register');   
        }
    }
  } else {
    this.props.history.push('/register'); 
  }
}
  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
    return (
      <div>
     <Grid container>
                    <Grid item xs={12} sm={12} md={9} container direction="row"  justify="center" alignItems="center">
                    <Grid item md={6}>
                     <h2>Welcome </h2>
                    <h4>Login to continue</h4>
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
                        <Button variant="contained" color="primary" type="submit" className={classes.button}>Login</Button>                      
                    </form>
                    </Grid>
                </Grid>
                </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Login);
