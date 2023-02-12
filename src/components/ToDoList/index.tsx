import React, {useCallback, useEffect, useState, Fragment} from 'react';
import {List, Button, Grid, Divider, Typography} from '@mui/material';
import {ToDo} from "../../App";
import {ToDoItem} from "../ToDoItem";

interface Props {
    toDos: ToDo[];
    onClick: (toDos: ToDo[]) => void;
}

export const ToDoList: React.FC<Props> = ({toDos, onClick}) => {

    const [tempToDos, setToDos] = useState( toDos.map((toDo) => toDo));

    useEffect(() => {
        setToDos(toDos.map((toDo) => toDo));
    },[toDos]);

    const handleClick = useCallback(() => {
        onClick(tempToDos);
    },[onClick, tempToDos]);

    const handleCheck = useCallback((status: boolean, index: number) => {
        setToDos(tempToDos.map((toDo, i) => {
            if (i !== index) {
                return toDo;
            }
            const temp = Object.assign({}, toDo, { status: status});
            return temp;
        }));
    },[tempToDos, setToDos]);

    return (
        <>
            {toDos.length > 0 &&
                <Grid container sx={{ alignItems: 'center' }} justifyContent="center" flexDirection="column">
                    <Grid item xs={10}>
                        <Typography variant="h4">Your To Do List</Typography>
                        <List dense sx={{ width: '100%', bgcolor: 'background.paper', alignItems: 'center' }}>
                            {tempToDos.map((toDo, index) => (
                                <Fragment key={index} >
                                    <ToDoItem onCheck={handleCheck} value={toDo.value} status={toDo.status} index={index}/>
                                    <Divider />
                                </Fragment>
                            ))}
                        </List>
                    </Grid>
                    <Grid item sx={{ alignItems: 'center' }} justifyContent="center">
                        <Button onClick={handleClick} variant="contained" sx={{ mt: '16px', width: '200px'}}>Save</Button>
                    </Grid>
                </Grid>
            }
        </>
    )
};