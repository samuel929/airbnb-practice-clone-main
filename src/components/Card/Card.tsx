import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Grid } from '@mui/material';

const ExpandMore = styled((props:any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Cards() {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [rooms, setRooms] = React.useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step:any) => {
    setActiveStep(step);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    const fetchRooms = async () => {
      await axios.get("http://localhost:3000/rooms")
        .then((res) => {
          setRooms(res.data)
        });
    }
    fetchRooms();
  }, []);

  return (
    <Grid container spacing={2} style={{ margin: "40px 0 40px 25px" }}
    >
      {rooms.map((item:any) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Link to={`room/${item.id}`}>
          <Card sx={{ maxWidth: 345 }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {item.photos.map((step:any, index:any) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 325,
                        display: 'block',
                        maxWidth: 300,
                        overflow: 'hidden',
                        width: '100%',
                        borderRadius: "10px"
                      }}
                      src={step}
                      alt={step}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <CardContent style={{ background: "none", border: "none !important" }}>
              <Typography variant="subtitle1" gutterBottom style={{ position: "relative", right: "27%", fontFamily: "Roboto" }}>
                <b>{item.location}</b>
              </Typography>
              <Typography color={"#bdbdbd"} variant="subtitle2" gutterBottom style={{ position: "relative", right: "43%", fontFamily: "Roboto" }}>
                Sep 13 - 18
              </Typography>
              <Typography variant="body1" gutterBottom style={{ position: "relative", right: "36%", fontFamily: "Roboto" }}>
                R{item.price} ZAR night
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
