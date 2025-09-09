// add.js (untuk add.html)

const namaInput = document.getElementById('nama-input');
const asalInput = document.getElementById('asal-input');
const umurInput = document.getElementById('umur-input');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', function() {
    const nama = namaInput.value.trim();
    const asal = asalInput.value.trim();
    const umur = umurInput.value.trim();

    if (nama !== '' && asal !== '' && umur !== '') {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = {
            id: Date.now(),
            nama: nama,
            asal: asal,
            umur: umur
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Perintah untuk kembali ke halaman index
        window.location.href = 'index.html';
        
    } else {
        alert('Semua kolom harus diisi!');
    }
});