function updateCountdown() {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const newYearTime = new Date(`January 01, ${nextYear} 00:00:00`).getTime();
    const currentTime = new Date().getTime();
    const diff = newYearTime - currentTime;

    if (diff <= 0) {
        document.querySelector('.countdown-container').innerHTML = '<h1>გილოცავთ ახალ წელს! 🎉</h1>';
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
    document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
updateCountdown();