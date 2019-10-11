import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import WeatherImg from './assets/weather.png'
const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: '80%',
    },
      card: {
        maxWidth: 345,
        marginLeft:theme.spacing(1)
      },
      position:{
        marginLeft:theme.spacing(1)   
      },
      media: {
        height: 170,
      },
});
class Dashboard extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                location: '',
                temp: '',
                city_Name: 'Delhi',
            };
        }

 logout = () => {
     this.props.history.push('/');
 }

 componentDidMount() {
     this.fetchWeather();
 }

  fetchWeather = () => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city_Name}&units=metric&APPID=9a81ca42c0e1d502ba798b6032fbedf6`).then(data => {
          return data.json();
      }).then(weather => {
          if (weather.cod===200) {
            this.setState({
                location: weather.name,
                temp: weather.main.temp + " C",
            })
          } else {
            this.setState({
                location: "Sorry",
                temp:weather.message + " Please Try Again with another city",
            })  
          }
          
      })
  }
  
  render() {
    const { classes } = this.props; 
    return (
      <div className={classes.root}>
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DashBoard
          </Typography>
           <MenuList>
             <MenuItem onClick={this.logout} className="text-color"><AccountCircle/>&nbsp;&nbsp;Logout</MenuItem>
         </MenuList>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={12} md={12}>
        <FormControl className={classes.formControl}>
             <TextField
               label="City Name"
                placeholder="City Name"
                value={this.state.city_Name}
                margin="normal"
                fullWidth
                required
               variant="outlined"
              InputLabelProps={{
              shrink: true,
                }}
              onChange={(e) => this.setState({ city_Name: e.target.value })}
               />
             </FormControl><br />
                <FormControl className={classes.position}>
                   <Button variant="contained" color="primary" onClick={this.fetchWeather}>Fetch Weather</Button>
                </FormControl>
           </Grid><br/>
        <Card className={classes.card}>
         <CardActionArea>
         <CardMedia
          className={classes.media}
          image={WeatherImg}
          title="Weather"
        />
         <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.state.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {this.state.temp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
    );
  }
}
export default withStyles(styles)(Dashboard);
