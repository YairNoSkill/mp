document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').textContent = '¡Sí, lo eres! ❤️';
    document.getElementById('response').style.color = 'green';
    document.getElementById('response').style.fontSize = '2rem';
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Oh no, lo siento... 😢';
    document.getElementById('response').style.color = 'red';
    document.getElementById('response').style.fontSize = '2rem';
});
