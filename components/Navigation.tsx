import React from 'react'
import Search from './Search'
import {
    AppBar,
    Toolbar,
    Typography,
    Container
} from "@mui/material"

const Navigation = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">          
                <Typography variant="h6" noWrap component="a" href="/">
                    Heron&apos;s Haven
                </Typography>
                <Search/>
            </Container>
        </AppBar>
    )
}

export default Navigation