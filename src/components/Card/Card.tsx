import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function Cards() {
    const [expanded, setExpanded] = React.useState(false);
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
 
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step: number) => {
      setActiveStep(step);
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

      const images = [
        {
          label: 'San Francisco – Oakland Bay Bridge, United States',
          imgPath:
            'https://a0.muscache.com/im/pictures/48d9d9d2-06d0-4fc3-a2df-27778b4ebf13.jpg?im_w=1200',
        },
        {
          label: 'Bird',
          imgPath:
            'https://a0.muscache.com/im/pictures/0b878725-ffed-4d89-984c-b0ee1afd7dd0.jpg?im_w=720',
        },
        {
          label: 'Bali, Indonesia',
          imgPath:
            'https://a0.muscache.com/im/pictures/4e40697e-59b5-4fc5-8486-72caafe297dd.jpg?im_w=720',
        },
        {
          label: 'Goč, Serbia',
          imgPath:
            'https://a0.muscache.com/im/pictures/d6986258-ba7d-40bd-be08-a78995311370.jpg?im_w=720',
        },
        {
            label:" Serbia",
            imgPath:"https://a0.muscache.com/im/pictures/1b8b3a46-d6e9-42e0-b219-ca3b6fe4b38c.jpg?im_w=720"
        }
      ];
      const maxSteps = images.length;
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
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
                  borderRadius:"10px"
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
            <div className='center-map-button'>
            <MobileStepper
         style={{position:"absolute",zIndex:9,bottom:"3%",background:"18%"}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={undefined
        }
        backButton={undefined
        }
      />
            </div>
         </div>
        ))}
        
      </AutoPlaySwipeableViews>
    <CardContent style={{background:"none",border:"none !important"}}>
    <Typography variant="subtitle1" gutterBottom  style={{position:"relative",right:"27%",fontFamily:"Roboto"}}>
       <b> Randburg, South Africa</b>
    </Typography>
    <Typography color={"#bdbdbd"} variant="subtitle2" gutterBottom style={{position:"relative",right:"43%",fontFamily:"Roboto"}}>
     Sep 13 - 18
      </Typography>
      <Typography variant="body1" gutterBottom style={{position:"relative",right:"36%",fontFamily:"Roboto"}}>
        R910 ZAR night
      </Typography>
    </CardContent>
    </Card>
  )
}
