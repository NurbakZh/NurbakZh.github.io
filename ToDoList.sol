pragma solidity ^0.4.22;
pragma experimental ABIEncoderV2;

contract TodoList {
    event AddTask(address user, uint taskId);
    event RemoveTask(uint taskId, bool status);

    struct Task {
        uint taskId;
        address user;
        string value;
        bool status;
    }

    Task[] private tasks;

    mapping(uint256 => address) taskOfUser;

    function addTask(string memory value, bool status) public {
        uint taskId = tasks.length;
        tasks.push(Task(taskId, msg.sender, value, status));
        taskOfUser[taskId] = msg.sender;
        emit AddTask(msg.sender, taskId);
    }

    function getUserTasks() public view returns (Task[] memory) {
        Task[] memory userTasks = new Task[](tasks.length);
        uint counter = 0;
        for(uint i = 0; i < tasks.length; i++) {
            if(taskOfUser[i] == msg.sender && tasks[i].status == false) {
                userTasks[counter] = tasks[i];
                counter++;
            }
        }
        Task[] memory userTasksFinal = new Task[](counter);
        for(i = 0; i<counter; i++) {
            userTasksFinal[i] = userTasks[i];
        }
        return userTasksFinal;
    }

    function removeTask(uint taskId) public {
        if(taskOfUser[taskId] == msg.sender) {
            tasks[taskId].status = true;
            emit RemoveTask(taskId, true);
        }
    }
}