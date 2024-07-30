const copyTextElement = document.getElementById('copy-text');
const messageElement = document.getElementById('message');

const textToCopy = '.thegaminggamer';

function copyText() {

    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    
    document.execCommand('copy');
    
    document.body.removeChild(textarea);
    
    messageElement.style.display = 'block';
    
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 2000);
}

copyTextElement.addEventListener('click', copyText);
