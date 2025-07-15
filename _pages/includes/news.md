
# News

[//]: (- *2024.04*: 🎉 test)

<div markdown="1" id="more-content-2" style="display: none;"> 

[//]: (- *2024.04*: 🎉 test)
</div>

<button id="toggle-button-2" onclick="toggleVisibility2()">Older news</button>

<style>
/* 按钮样式 */
#toggle-button-2 {
    background-color: #FFFFFF; /*背景 */
    color: #000000; /* 文字颜色 */
    padding: 8px 16px; /* 内边距 */
    border: soli, #000000; /* 边框 */
    border-radius: 4px; /* 圆角 */
    cursor: pointer; /* 鼠标指针样式 */
    font-size: 14px; /* 字体大小 */
    transition: background-color 0.3s; /* 背景色过渡效果 */
}

/* 悬停效果 */
#toggle-button-2:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 阴影 *
    /* background-color: #0056b3; /* 深蓝色 */ */
}
</style>

<script>
function toggleVisibility2() {
    var content = document.getElementById('more-content-2');
    var button = document.getElementById('toggle-button-2');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.innerText = 'Older news';
    } else {
        content.style.display = 'none';
        button.innerText = 'Older news';
    }
}
</script>

