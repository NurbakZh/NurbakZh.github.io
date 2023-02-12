import React, {useCallback, useEffect, useState} from 'react';
import {Typography, AppBar, Toolbar, Box, containerClasses} from '@mui/material';
import { ToDoAdd } from './components/ToDoAdd';
import { ToDoList } from "./components/ToDoList";
import { Address, Abi } from './config';
import Web3 from 'web3';
import { Contract } from "web3-eth-contract"

export interface ToDo {
    taskId: number;
    value: string;
    status: boolean;
}

function App() {
    const [toDos, setToDos] = useState<ToDo[]>([]);
    const [account, setAccount] = useState<string>();
    const [contract, setContract] = useState<Contract>();

    useEffect(() => {
        async function load() {
            const web3 = new Web3(Web3.givenProvider);
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]);
            const contract = new web3.eth.Contract(Abi as any, Address);
            setContract(contract);
            const s = await contract?.methods.getUserTasks().call();
            setToDos(s);
        }

        load();
    }, [setContract, setAccount]);

    const handleClick = useCallback(async (value: string) => {
        alert("Please wait, until your task is added");
        await contract?.methods.addTask(value, false).send ({from: account});
        async function load() {
            const s = await contract?.methods.getUserTasks().call ({from: account});
            return s;
        }
        load().then((s) => {
            setToDos(s);
        });
    },[setToDos, toDos, contract]);

    const handleListClick = useCallback(async (toDos: ToDo[]) => {
        setToDos(toDos);
        const indexesToDelete: number[] = [];
        toDos.filter((toDo, index) => {
            if (toDo.status) {
                indexesToDelete.push(toDos[index]['taskId']);
            }
        });
        alert("Well done, removing completed tasks..");
        for (let i = 0; i < indexesToDelete.length; i++) {
            await contract?.methods.removeTask(indexesToDelete[i]).send ({from: account});
        }
        alert("Tasks removed");
    },[setToDos]);

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <AppBar color="primary" position="static" component="nav">
                <Toolbar>
                    <Typography color="inherit" sx={{fontWeight: 'bold'}}>ToDo List DApp</Typography>
                </Toolbar>
            </AppBar>
            <ToDoAdd onClick={handleClick}></ToDoAdd>
            <ToDoList toDos={toDos.filter((toDo) => !toDo.status)} onClick={handleListClick}></ToDoList>
        </Box>
    );
}

export default App;
