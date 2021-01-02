import React from 'react'
import { Typography, Container, Box } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    title: {
      textAlign:'left',
      paddingTop:'30px'
    },
    timeline: {
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
    },
  })
)

export default function RoadMap() {
  const classes = useStyles();
  return (
    <div className='roadmapContainer'>
      <Container>
        <Typography className={classes.title} variant="h4" noWrap>
          Product roadmap
        </Typography>
      </Container>
      <Container className={classes.timeline}> 
        <Box> TIMELINE HERE</Box>
        <Box> RIGHT SIDEBAR HERE</Box>
      </Container>
    </div>
  )
}
