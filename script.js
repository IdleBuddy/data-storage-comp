document.getElementById('docum-ic').addEventListener('mouseenter', () => {
    document.getElementById('docum-text').classList.add('visible');
})

document.getElementById('docum-ic').addEventListener('mouseout', () => {
    document.getElementById('docum-text').classList.remove('visible');
})

document.getElementById('folder-ic').addEventListener('mouseenter', () => {
    document.getElementById('folder-text').classList.add('visible');
})

document.getElementById('folder-ic').addEventListener('mouseout', () => {
    document.getElementById('folder-text').classList.remove('visible');
})

document.getElementById('upload-ic').addEventListener('mouseenter', () => {
    document.getElementById('upload-text').classList.add('visible');
})

document.getElementById('upload-ic').addEventListener('mouseout', () => {
    document.getElementById('upload-text').classList.remove('visible');
})