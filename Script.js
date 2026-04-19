// Danh sách dữ liệu ADN
const alienDNA = [
    { name: "Heatblast", type: "Official" },
    { name: "Four Arms", type: "Official" },
    { name: "Diamondhead", type: "Official" },
    { name: "XLR8", type: "Official" },
    { name: "Humungousaur", type: "Official" },
    { name: "Carnitrix Ben", type: "Fan-made" }, // Ví dụ đồng hồ Fan-made
    { name: "Atomic-X", type: "Official Fusion" }
];

// Load dữ liệu vào Select box
const s1 = document.getElementById('dna1');
const s2 = document.getElementById('dna2');

alienDNA.forEach(dna => {
    let opt = `<option value="${dna.name}">${dna.name} (${dna.type})</option>`;
    s1.innerHTML += opt;
    s2.innerHTML += opt;
});

function fuseDNA() {
    const val1 = s1.value;
    const val2 = s2.value;
    
    const resultTitle = document.getElementById('hybrid-name');
    const resultDesc = document.getElementById('hybrid-desc');

    if (val1 === val2) {
        resultTitle.innerText = `Ultimate ${val1}`;
        resultDesc.innerText = "Sử dụng ADN trùng lặp kích hoạt trạng thái Tiến hóa (Ultimate Form).";
    } else {
        // Thuật toán ghép tên đơn giản
        const fusionName = val1.substring(0, val1.length/2) + val2.substring(val2.length/2);
        resultTitle.innerText = fusionName.toUpperCase();
        resultDesc.innerText = `Một thực thể mới được tạo ra từ sự kết hợp giữa ${val1} và ${val2}. Tương thích hệ thống Biomnitrix.`;
    }
}
