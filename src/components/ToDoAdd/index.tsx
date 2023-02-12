import React, {useCallback, useState} from 'react';
import {TextField, Grid, Button, Box, Typography} from '@mui/material';

interface Props {
    onClick: (value: string) => void;
}

export const ToDoAdd: React.FC<Props> = ({onClick}) => {
    const [value, setValue] = useState('');

    const handleClick = useCallback(() => {
        if(value.trim().length < 1) {
            alert('please enter something');
        } else {
            onClick(value);
        }
    },[onClick, value]);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    },[setValue]);

    return (
        <Box sx={{ margin: '16px', padding: '16px' }}>
            <Typography variant="h5" align="center" mb="16px">Add New Task</Typography>
            <Grid container sx={{ alignItems: 'center' }} justifyContent="center">
                <Grid xs={10} md={7} item style={{ paddingRight: 16 }}>
                    <TextField
                        placeholder="Write down what you want to accomplish"
                        value={value}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button
                        sx={{ padding: 2 }}
                        fullWidth
                        color="primary"
                        variant="contained"
                        onClick={handleClick}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
};