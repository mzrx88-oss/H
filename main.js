// تاريخ البداية المعتمد
const startLoveDate = new Date("2025-06-15T00:00:00"); 

// بيانات الدخول - عدلها براحتك
const CORRECT_USER = "Hodoa"; 
const CORRECT_PASS = "1102008";

function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if(user === CORRECT_USER && pass === CORRECT_PASS) {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-page').classList.remove('hidden');
    } else {
        alert("البيانات غلط يا ست البنات ❤️");
    }
}

function goToSurprise() {
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('surprise-page').classList.remove('hidden');
    updateTimer();
    setInterval(updateTimer, 1000); 
}

function updateTimer() {
    const now = new Date();
    const diff = now - startLoveDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}
