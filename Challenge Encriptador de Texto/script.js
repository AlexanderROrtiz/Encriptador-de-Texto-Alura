// Se obtienen las referencias a los elementos HTML
const inputText = document.getElementById('input-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const outputText = document.getElementById('output-text');
const validationText = document.getElementById('validation-text');
const authorName = document.getElementById('author-name');
const creationYear = document.getElementById('creation-year');

// Función para encriptar el texto
function encryptText() {
  const text = inputText.value;
  if (validateInput(text)) {
    const encryptedText = encryptDecrypt(text, true);
    outputText.value = encryptedText;
    validationText.textContent = 'Encriptación Exitosa';
  } else {
    validationText.textContent = 'No se aceptan mayúsculas ni caracteres especiales.';
  }
}

// Función para desencriptar el texto
function decryptText() {
  const text = inputText.value;
  if (validateInput(text)) {
    const decryptedText = encryptDecrypt(text, false);
    outputText.value = decryptedText;
    validationText.textContent = 'Desencriptación Exitosa';
  } else {
    validationText.textContent = 'No se aceptan mayúsculas ni caracteres especiales.';
  }
}

// Función para copiar el texto del campo de salida
function copyText() {
  outputText.select();
  document.execCommand('copy');
  validationText.textContent = 'Texto copiado al portapapeles.';
}

// Función para encriptar/desencriptar el texto
function encryptDecrypt(text, isEncrypt) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (isEncrypt) {
      result += String.fromCharCode(charCode + 1);
    } else {
      result += String.fromCharCode(charCode - 1);
    }
  }
  return result;
}

// Función para validar la entrada de texto mediante expresiones regulares
function validateInput(text) {
  const specialCharsRegex = /[^a-zA-Z0-9\s]/;
  const uppercaseRegex = /[A-Z]/;
  return !specialCharsRegex.test(text) && !uppercaseRegex.test(text);
}

// Se agrega event listeners a los botones
encryptBtn.addEventListener('click', encryptText);
decryptBtn.addEventListener('click', decryptText);
copyBtn.addEventListener('click', copyText);

// Se establece el nombre del autor y el año de creación
authorName.textContent = 'Roberth Ortiz - Ingeniero de Sistemas, Full Stack';
creationYear.textContent = '2024';
