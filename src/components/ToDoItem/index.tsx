import React, { useCallback } from 'react';
import { ListItem, Checkbox, ListItemText, ListItemButton, Typography } from '@mui/material';

interface Props {
    value: string;
    status: boolean;
    index: number;
    onCheck: (status: boolean, index: number) => void;
}

export const ToDoItem: React.FC<Props> = ({value, status, onCheck, index}) => {

    const handleCheck = useCallback(() => {
        onCheck(!status, index);
    },[onCheck, index, status]);

    return (
        <ListItem
            sx={{
                minWidth: { xs: '300px', sm: '450px', md: '700px', lg: '900px', xl: '1200px' },
                backgroundColor: '#f0f0f0',
            }}
            key={value}
            secondaryAction={
                <Checkbox
                    edge="end"
                    onClick={handleCheck}
                    checked={status}
                />
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemText primary={
                    <Typography variant="body2" sx={{
                        fontSize: '20px', lineHeight: '30px'
                    }}>
                        {value}</Typography>
                } />
            </ListItemButton>
        </ListItem>
    )
};