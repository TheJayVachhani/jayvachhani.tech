import React from 'react';
import {Typography, Box, Grid, IconButton} from '@material-ui/core';
import {LinkedIn, GitHub} from '@material-ui/icons';
import Typed from 'react-typed';
import './home.css';

const HomeComponent = () => {
    return (
        <Box component="div" className="header-wrapper" >
            <Box component="div" className="header">
                <Grid container justify="center" direction="column">
                    <Grid item xs={12}>
                        <Typography variant='h3' color="primary">Jay Vachhani</Typography>
                        <Typography variant='h5' color="primary">
                            Computer Science and Management
                        </Typography>
                    </Grid>
                    <br/>
                    <Grid container justify="center" direction="column" >
                        <Grid item xs={12} align="center">
                            <Typography variant='h6' color="secondary">
                                <Typed strings={["Web Development", "Full Stack Learner", "Data Science", "Financial Markets", "AI + ML Learner",]} typeSpeed={30} backSpeed={30} loop/>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant='h6' color="secondary">
                                <Typed strings={["JavaScript", "HTML + CSS", "REACT","Python", "SQL", "Java", "Scala", "C++", "PDDL", "LaTeX"]} typeSpeed={50} backSpeed={50} loop/>
                            </Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <Box component="div" className="icon-wrapper">
                        <Grid container justify="center" direction="row" spacing={2}>
                            <Grid item xs={3} lg={2}>
                                <IconButton href="https://www.linkedin.com/in/thejayvachhani/" target="_blank">
                                    <LinkedIn color="secondary" style={{ fontSize: 35 }}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={3} lg={2}>
                                <IconButton href="https://github.com/TheJayVachhani" target="_blank">
                                    <GitHub color="secondary" style={{ fontSize: 30 }}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
}

export default HomeComponent;