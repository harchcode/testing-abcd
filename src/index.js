import royalRumble from './royal-rumble';

const fileInput = document.getElementById('file-input');
const downloadLink = document.getElementById('download-link');
const inputP = document.getElementById('input-p');
const outputP = document.getElementById('output-p');

fileInput.addEventListener('change', (ev) => {
  const file = ev.target.files[0];

  if (!file) return;

  const fr = new FileReader();
  
  fr.onload = (e) => {
    const result = e.target.result.trim();
    const inputs = result.split('\n');
    const outputs = royalRumble(inputs);

    inputP.innerHTML = `Input:<br />${inputs.join('<br />')}`
    outputP.innerHTML = `Output:<br />${outputs.join('<br />')}`;

    const blob = new Blob([outputs.join('\n')], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    downloadLink.href = url
    downloadLink.download = 'output.txt';
  }

  fr.readAsText(file)
});