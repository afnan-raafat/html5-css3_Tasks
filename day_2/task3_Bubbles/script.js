window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');
    const generateBtn = document.getElementById('generateBtn');

    let currentColor = colorPicker.value;

    colorPicker.addEventListener('input', function() {
        currentColor = colorPicker.value;
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    generateBtn.addEventListener('click', function() {
        const numberOfCircles = Math.floor(Math.random() * 100) + 1;

        for (let i = 0; i < numberOfCircles; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 30 + 10;  

            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.strokeStyle = currentColor;
            context.stroke();
        }
    });
}
