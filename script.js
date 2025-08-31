/* script.js (Updated with progress, confetti, highlights, history) */
let currentExercise = 1;
const totalExercises = 5;
let currentStep = 1;

function nextStep(step) {
    document.getElementById(`step${currentStep}`).classList.add('d-none'); // Hide current
    currentStep = step;
    const nextElement = document.getElementById(`step${step}`);
    nextElement.classList.remove('d-none');
    nextElement.style.animation = 'fadeIn 0.5s'; // Animate in
}

// Show first step on load for index.html
if (document.getElementById('step1')) {
    document.getElementById('step1').classList.remove('d-none');
}

function showGuess(guess, num) {
    let correct;
    if (num === 1) correct = 'positive';
    else if (num === 2) correct = 'negative';
    else if (num === 3) correct = 'neutral';
    else if (num === 4) correct = 'positive';
    else if (num === 5) correct = 'negative';
    
    const isCorrect = guess === correct;
    const result = isCorrect ? 'Yay! Correct! 🎉' : 'Oops! Try again. 🤔';
    const color = isCorrect ? 'green' : 'red';
    document.getElementById(`guess${num}`).innerText = result;
    document.getElementById(`guess${num}`).style.color = color;

    if (isCorrect) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(() => {
            currentExercise++;
            if (currentExercise <= totalExercises) {
                document.getElementById(`ex${currentExercise}`).classList.remove('d-none');
                updateProgress();
            } else {
                document.getElementById('completion-msg').classList.remove('d-none');
                document.getElementById('analyzer-btn').classList.remove('d-none');
            }
        }, 1000);
    }
}

function updateProgress() {
    const progress = ((currentExercise - 1) / totalExercises) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-bar').innerText = `${progress}%`;
}

function analyzeSentiment() {
    const text = document.getElementById('inputText').value;
    if (!text) return;

    const lowerText = text.toLowerCase();
    const positiveWords = ['love', 'great', 'happy', 'best', 'awesome', 'fun', 'good', 'excited', 'wonderful', 'amazing', 'fantastic', 'joy', 'excellent'];
    const negativeWords = ['hate', 'bad', 'sad', 'worst', 'boring', 'lost', 'angry', "don't like", 'terrible', 'awful', 'horrible', 'disappoint', 'cry'];

    let posCount = 0;
    let negCount = 0;
    let highlighted = text;

    positiveWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        if (regex.test(lowerText)) posCount++;
        highlighted = highlighted.replace(regex, match => `<span class="positive">${match}</span>`);
    });
    negativeWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        if (regex.test(lowerText)) negCount++;
        highlighted = highlighted.replace(regex, match => `<span class="negative">${match}</span>`);
    });

    let sentiment = 'neutral';
    let emoji = '😐';
    let alertClass = 'alert-warning';

    if (posCount > negCount) {
        sentiment = 'positive';
        emoji = '😊';
        alertClass = 'alert-success';
    } else if (negCount > posCount) {
        sentiment = 'negative';
        emoji = '😢';
        alertClass = 'alert-danger';
    }

    const result = `Emo thinks this is ${sentiment}! ${emoji}`;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
    resultDiv.className = `alert ${alertClass}`;
    resultDiv.classList.remove('d-none');

    const highlightDiv = document.getElementById('highlighted-text');
    highlightDiv.innerHTML = `<strong>Highlighted Text:</strong> ${highlighted}`;
    highlightDiv.classList.remove('d-none');

    // Save to history
    addToHistory(text, sentiment, emoji);
}

function clearInput() {
    document.getElementById('inputText').value = '';
    document.getElementById('result').classList.add('d-none');
    document.getElementById('highlighted-text').classList.add('d-none');
}

function addToHistory(text, sentiment, emoji) {
    const history = JSON.parse(localStorage.getItem('sentimentHistory')) || [];
    history.push({ text, sentiment, emoji });
    if (history.length > 5) history.shift(); // Keep last 5
    localStorage.setItem('sentimentHistory', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('history-list');
    list.innerHTML = '';
    const history = JSON.parse(localStorage.getItem('sentimentHistory')) || [];
    history.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerText = `${item.text} - ${item.sentiment} ${item.emoji}`;
        list.appendChild(li);
    });
}

// Load history on page load
if (document.getElementById('history-list')) {
    renderHistory();
}

// Show first exercise on load
if (document.getElementById('ex1')) {
    document.getElementById('ex1').classList.remove('d-none');
    updateProgress();
}