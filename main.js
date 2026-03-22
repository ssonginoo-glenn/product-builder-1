
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberSpans = document.querySelectorAll('.number');

    const generateLottoNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNum);
        }
        return Array.from(numbers);
    };

    const displayNumbers = (numbers) => {
        numberSpans.forEach((span, index) => {
            span.textContent = numbers[index];
            
            // Assign color based on number range
            const num = numbers[index];
            let colorClass = '';
            if (num <= 10) {
                colorClass = 'color-1-10';
            } else if (num <= 20) {
                colorClass = 'color-11-20';
            } else if (num <= 30) {
                colorClass = 'color-21-30';
            } else if (num <= 40) {
                colorClass = 'color-31-40';
            } else {
                colorClass = 'color-41-45';
            }
            
            span.className = 'number ' + colorClass;
        });
    };

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    });
});
