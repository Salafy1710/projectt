// // edit.js (untuk edit.html)

// const editInput = document.getElementById('edit-input');
// const saveBtn = document.getElementById('save-btn');

// // Ambil ID dari URL
// const urlParams = new URLSearchParams(window.location.search);
// const todoId = parseInt(urlParams.get('id'));

// // Ambil semua todos dari localStorage
// let todos = JSON.parse(localStorage.getItem('todos')) || [];
// const todoToEdit = todos.find(todo => todo.id === todoId);

// if (todoToEdit) {
//     // Jika todo ditemukan, isi input dengan teksnya
//     editInput.value = todoToEdit.text;
// } else {
//     // Jika tidak ditemukan, kembalikan ke halaman utama
//     alert('Tugas tidak ditemukan!');
//     window.location.href = 'index.html';
// }

// // Tambahkan event listener untuk tombol Simpan
// saveBtn.addEventListener('click', function() {
//     const newText = editInput.value.trim();
//     if (newText !== '') {
//         // Update teks pada todo yang sedang diedit
//         todoToEdit.text = newText;
//         // Simpan kembali seluruh array todos ke localStorage
//         localStorage.setItem('todos', JSON.stringify(todos));
//         alert('Tugas berhasil diperbarui!');
//         // Arahkan kembali ke halaman utama
//         window.location.href = 'index.html';
//     } else {
//         alert('Tugas tidak boleh kosong!');
//     }
// });




// edit.js (untuk edit.html)

const editNamaInput = document.getElementById('edit-nama-input');
const editAsalInput = document.getElementById('edit-asal-input');
const editUmurInput = document.getElementById('edit-umur-input');
const saveBtn = document.getElementById('save-btn');

const urlParams = new URLSearchParams(window.location.search);
const userId = parseInt(urlParams.get('id'));

let users = JSON.parse(localStorage.getItem('users')) || [];
const userToEdit = users.find(user => user.id === userId);

if (userToEdit) {
    editNamaInput.value = userToEdit.nama;
    editAsalInput.value = userToEdit.asal;
    editUmurInput.value = userToEdit.umur;
} else {
    alert('Pengguna tidak ditemukan!');
    window.location.href = 'index.html';
}

saveBtn.addEventListener('click', function() {
    const newNama = editNamaInput.value.trim();
    const newAsal = editAsalInput.value.trim();
    const newUmur = editUmurInput.value.trim();

    if (newNama !== '' && newAsal !== '' && newUmur !== '') {
        userToEdit.nama = newNama;
        userToEdit.asal = newAsal;
        userToEdit.umur = newUmur;

        localStorage.setItem('users', JSON.stringify(users));
        alert('Data berhasil diperbarui!');
        
        // Perintah untuk kembali ke halaman index
        window.location.href = 'index.html';
        
    } else {
        alert('Semua kolom harus diisi!');
    }
});