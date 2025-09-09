// // script.js (untuk index.html)

// const addBtn = document.getElementById('add-btn');
// const todoList = document.getElementById('todo-list');

// // Memuat data dari localStorage atau mulai dengan array kosong
// let todos = JSON.parse(localStorage.getItem('todos')) || [];

// // Fungsi untuk menyimpan data ke localStorage
// function saveTodos() {
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// // Fungsi untuk menampilkan (render) semua todo
// function renderTodos() {
//     todoList.innerHTML = '';
//     todos.forEach(todo => {
//         const li = document.createElement('li');
//         li.className = 'todo-item';

//         li.innerHTML = `
//             <span>${todo.text}</span>
//             <div>
//                 <a href="edit.html?id=${todo.id}" class="edit-btn">Edit</a>
//                 <button class="delete-btn" data-id="${todo.id}">Hapus</button>
//             </div>
//         `;
//         todoList.appendChild(li);
//     });
// }

// // Event listener untuk tombol 'Tambah'
// addBtn.addEventListener('click', function() {
//     // Arahkan ke halaman 'add.html' saat tombol diklik
//     window.location.href = 'add.html';
// });

// // Event listener untuk tombol Hapus
// todoList.addEventListener('click', function(event) {
//     const target = event.target;
//     if (target.classList.contains('delete-btn')) {
//         const idToDelete = parseInt(target.getAttribute('data-id'));
//         todos = todos.filter(todo => todo.id !== idToDelete);
//         saveTodos();
//         renderTodos();
//     }
// });

// // Panggil fungsi renderTodos agar daftar tugas langsung tampil saat halaman dimuat
// renderTodos();




// script.js (untuk index.html)

const addBtn = document.getElementById('add-btn');
const userList = document.getElementById('user-list');

let users = JSON.parse(localStorage.getItem('users')) || [];

function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

function renderUsers() {
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.className = 'user-item';

        li.innerHTML = `
            <div class="col-no">${index + 1}</div>
            <div class="col-nama">${user.nama}</div>
            <div class="col-asal">${user.asal}</div>
            <div class="col-umur">${user.umur}</div>
            <div class="col-actions">
                <a href="edit.html?id=${user.id}" class="edit-btn">Edit</a>
                <button class="delete-btn" data-id="${user.id}">Hapus</button>
            </div>
        `;
        userList.appendChild(li);
    });
}

// Event listener untuk tombol 'Tambah', mengarahkan ke halaman add.html
addBtn.addEventListener('click', function() {
    window.location.href = 'add.html';
});

// Event listener untuk tombol Hapus
userList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('delete-btn')) {
        const idToDelete = parseInt(target.getAttribute('data-id'));
        users = users.filter(user => user.id !== idToDelete);
        saveUsers();
        renderUsers();
    }
});

renderUsers();