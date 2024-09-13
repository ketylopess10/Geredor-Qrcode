const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const qrcodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const text = textInput.value; 
    if (text.trim() === '') { 
        alert('Por favor, insira algum texto ou URL');
        return;
    }

    qrcodeContainer.innerHTML = '';

    const qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 200,
        height: 200,
    });
});