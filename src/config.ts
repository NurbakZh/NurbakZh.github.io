export const Address = "0x4b1bf0355f61feb5c121e974b8ba0f31526a7614";
export const Abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "value",
                "type": "string"
            },
            {
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "addTask",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "taskId",
                "type": "uint256"
            }
        ],
        "name": "removeTask",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "taskId",
                "type": "uint256"
            }
        ],
        "name": "AddTask",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "taskId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "RemoveTask",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getUserTasks",
        "outputs": [
            {
                "components": [
                    {
                        "name": "taskId",
                        "type": "uint256"
                    },
                    {
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "string"
                    },
                    {
                        "name": "status",
                        "type": "bool"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];