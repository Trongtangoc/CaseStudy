// Lớp Task định nghĩa một nhiệm vụ trong To-Do List
class Task {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.completed = false;
    }
}

// Hàm hiển thị danh sách các nhiệm vụ ra giao diện
function display(tasks) {
    let result = "<table>";
    for ( let i = 0; i < tasks.length; i++ ) {
        result += "<tr>";
        // result += `<td class="nameTask" id="taskName">${tasks[i].name}</td>`;
        let taskClass = "nameTask";
        if ( tasks[i].completed ) {
            taskClass += " completed";
            console.log(taskClass);
        } else {
            taskClass += "";
        }
        result += `<td class="${taskClass}" id="taskName-${i}">${tasks[i].name}</td>`;
        result += `<td><button class="btn" onclick="editTask(${i})">Edit</button></td>`;
        result += `<td><button class="btn" onclick="deleteTask(${i})">Delete</button></td>`;
        result += `<td><button class="btn" onclick="toggleComplete(${i})">`;
        if ( tasks[i].completed ) {
            result += "Back";
        } else {
            result += "Complete";
        }
        result += `</button></td>`;
        result += "</tr>";

    }
    result += "</table>";
    document.getElementById("result").innerHTML = result;
}

function toggleComplete(index) {
    // Đảo trạng thái hoàn thành của task
    tasks[index].completed = !tasks[index].completed;
    display(tasks);
}

// Hàm thêm nhiệm vụ mới
document.getElementById("add").addEventListener("click", function () {
    let taskName = document.getElementById("inputTaskValue").value;
    let task = {};
    if ( taskName.length > 5 && taskName.length < 100 ) {
        task = new Task(tasks.length + 1, taskName);
    } else {
        alert("Tên công việc phải từ 5 đến 100 ký tự");
        document.getElementById("taskInputValue").focus();
        return;
    }
    tasks.push(task);
    display(tasks);
    document.getElementById("alertProcess").innerHTML = "Bạn đã thêm công việc thành công";
    document.getElementById("inputTaskValue").value = "";
});

// Hàm xóa nhiệm vụ
function deleteTask(index) {
    let isDelete = confirm(`Bạn có chắc muốn xóa công việc "${tasks[index].name}"?`);
    if ( isDelete ) {
        tasks.splice(index, 1);
        display(tasks);
        alert("Xóa thành công");
    }
}

// Hàm sửa nhiệm vụ
function editTask(index) {
    let newTaskName = prompt("Sửa công việc:", tasks[index].name);
    if ( newTaskName !== null && newTaskName.trim() !== "" ) {
        tasks[index].name = newTaskName;
        display(tasks);
        alert("Cập nhật công việc thành công");
    }
}

// Khởi tạo danh sách nhiệm vụ
let tasks = [];
tasks.push(new Task(1, "Làm bài tập JavaScript"));
tasks.push(new Task(2, "Làm bài tập trên Bob"));
tasks.push(new Task(3, "Luyện tập trên Bob"));
tasks.push(new Task(4, "Làm 10 bài tập trên Hackerank"));

// Hiển thị danh sách nhiệm vụ lúc ban đầu
display(tasks);