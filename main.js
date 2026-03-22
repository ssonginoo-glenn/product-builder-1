document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const themeBtn = document.getElementById('theme-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const body = document.body;

    // Theme Toggle Logic
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeBtn.textContent = '☀️ Light Mode';
        } else {
            themeBtn.textContent = '🌙 Dark Mode';
        }
    });

    const generateLottoNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNum);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    const getColorClass = (num) => {
        if (num <= 10) return 'color-1-10';
        if (num <= 20) return 'color-11-20';
        if (num <= 30) return 'color-21-30';
        if (num <= 40) return 'color-31-40';
        return 'color-41-45';
    };

    const displayNumbers = (numbers) => {
        lottoNumbersContainer.innerHTML = '';
        numbers.forEach((num, index) => {
            const numberDiv = document.createElement('div');
            numberDiv.className = `number ${getColorClass(num)}`;
            numberDiv.textContent = num;
            
            // Add staggered animation
            numberDiv.style.opacity = '0';
            numberDiv.style.transform = 'translateY(20px)';
            lottoNumbersContainer.appendChild(numberDiv);

            setTimeout(() => {
                numberDiv.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                numberDiv.style.opacity = '1';
                numberDiv.style.transform = 'translateY(0) scale(1.1)';
                setTimeout(() => {
                    numberDiv.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        });
    };

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    });
});
