import React, { useState } from 'react';
import styles from '../styles/Search.module.css';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <Box>
            <form id="search_form" className={styles.form} method="GET" action="https://duckduckgo.com">
                <TextField name="q" />
                <IconButton type="submit"><SearchIcon/></IconButton>
            </form>
        </Box>
    )
}

export default Search