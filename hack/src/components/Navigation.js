import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import CssBaseline from '@mui/material/CssBaseline';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import Paper from '@mui/material/Paper';
import { useHistory } from "react-router-dom";
import { goToFeed } from "../routes/coordinator";
import { goToPoit } from "../routes/coordinator";
import { Box } from '@mui/material';
import { useState } from "react";


const Navigation = () => {
    const [value, setValue] = useState(localStorage.getItem("value"))
    const history = useHistory()
    console.log(value);
    return (
        <div>
            <Box sx={{ pb: 7 }}>
                <CssBaseline />
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            localStorage.setItem("value", newValue)
                        }}
                    >
                        <BottomNavigationAction onClick={() => goToFeed(history)} icon={value === "0" ? <PermIdentityIcon /> : <PermIdentityIcon />} />
                        <BottomNavigationAction onClick={() => goToPoit(history)} icon={value === "1" ? <HomeIcon /> : <HomeIcon />} />
                        <BottomNavigationAction onClick={() => goToPoit(history)} icon={value === "2" ? <NotListedLocationIcon /> : <NotListedLocationIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </div>

    )
}

export default Navigation



