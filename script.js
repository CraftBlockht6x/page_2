function encodeText() {
    const text = document.getElementById('textInput').value;
    const encodedText = btoa(encodeURIComponent(text));
    document.getElementById('textOutput').value = encodedText;
}

function decodeText() {
    const encodedText = document.getElementById('textOutput').value;
    const decodedText = decodeURIComponent(atob(encodedText));
    document.getElementById('textInput').value = decodedText;
}

function encodeImage() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const base64String = event.target.result;
        document.getElementById('base64Input').value = base64String;
    };
    reader.readAsDataURL(file);
}

// ... 其他函数 ...

function decodeImage() {
    const base64String = document.getElementById('base64Input').value;
    const imageElement = document.getElementById('imageOutput').querySelector('img');
    if (imageElement) {
        imageElement.src = base64String;
    } else {
        document.getElementById('imageOutput').innerHTML = `<img src="${base64String}" alt="Decoded Image">`;
    }
}

function downloadDecodedImage() {
    const imageElement = document.getElementById('imageOutput').querySelector('img');
    if (imageElement) {
        const src = imageElement.src;
        const link = document.createElement('a');
        link.href = src;
        link.download = 'decoded_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Please decode the image first.');
    }
}

function copyToClipboard(textBoxId) {
    const textBox = document.getElementById(textBoxId);
    textBox.select();
    document.execCommand('copy');
    alert(`Content copied to clipboard from ${textBoxId}`);
}
