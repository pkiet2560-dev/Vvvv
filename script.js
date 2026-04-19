function changeTheme() {
    const color = document.getElementById('watchType').value;
    // Đổi màu chủ đạo của web theo màu đồng hồ
    document.documentElement.style.setProperty('--main-color', color);
    document.querySelector('.omnitrix-container').style.boxShadow = `0 0 30px ${color}`;
    document.querySelector('button').style.backgroundColor = color;
}
