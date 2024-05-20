function updateCountdown() {
    const targetDate = new Date("2025-05-23T15:30:00");
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Add leading zeros
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        document.getElementById("time").innerHTML = 
            `${days} dagen, ${formattedHours} uur, ${formattedMinutes} minuten, en ${formattedSeconds} seconden`;
    } else {
        document.getElementById("time").innerHTML = "The event has started!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display the countdown immediately