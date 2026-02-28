let username = prompt("Masukkan nama kamu:");
if (username) {
    document.getElementById("username").innerText = username;
}

function validateForm() {
    let nama = document.getElementById("nama").value;
    let tanggal = document.getElementById("tanggal").value;
    let pesan = document.getElementById("pesan").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!nama || !tanggal || !pesan || !gender) {
        alert("Semua field harus diisi!");
        return false;
    }

    document.getElementById("result").innerHTML = `
        <h5>Data Anda:</h5>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;

    return false;
}