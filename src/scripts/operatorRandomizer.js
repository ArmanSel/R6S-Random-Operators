const operators = [
    { name: "Sledge", type: "Attacker" },
    { name: "Thatcher", type: "Attacker" },
    { name: "Smoke", type: "Defense" },
    { name: "Mute", type: "Defense" },
    { name: "Ash", type: "Attacker" },
    { name: "Thermite", type: "Attacker" },
    { name: "Castle", type: "Defender" },
    { name: "Pulse", type: "Defender" },
    { name: "Twitch", type: "Attacker" },
    { name: "Montagne", type: "Attacker" },
    { name: "Doc", type: "Defender" },
    { name: "Rook", type: "Defender" },
    { name: "Glaz", type: "Attacker" },
    { name: "Fuze", type: "Attacker" },
    { name: "Kapkan", type: "Defender" },
    { name: "Tachanka", type: "Defender" },
    { name: "Blitz", type: "Attacker" },
    { name: "IQ", type: "Attacker" },
    { name: "Jager", type: "Defender" },
    { name: "Bandit", type: "Defender" },
    { name: "Buck", type: "Attacker" },
    { name: "Frost", type: "Defender" },
    { name: "Blackbeard", type: "Attacker" },
    { name: "Valkyrie", type: "Defender" },
    { name: "Capitão", type: "Attacker" },
    { name: "Caveira", type: "Defender" },
    { name: "Hibana", type: "Attacker" },
    { name: "Echo", type: "Defender" },
    { name: "Jackal", type: "Attacker" },
    { name: "Mira", type: "Defender" },
    { name: "Ying", type: "Attacker" },
    { name: "Lesion", type: "Defender" },
    { name: "Zofia", type: "Attacker" },
    { name: "Ela", type: "Defender" },
    { name: "Dokkaebi", type: "Attacker" },
    { name: "Vigil", type: "Defender" },
    { name: "Lion", type: "Attacker" },
    { name: "Finka", type: "Attacker" },
    { name: "Maestro", type: "Defender" },
    { name: "Alibi", type: "Defender" },
    { name: "Maverick", type: "Attacker" },
    { name: "Clash", type: "Defender" },
    { name: "Nomad", type: "Attacker" },
    { name: "Kaid", type: "Defender" },
    { name: "Gridlock", type: "Attacker" },
    { name: "Mozzie", type: "Defender" },
    { name: "Nøkk", type: "Attacker" },
    { name: "Warden", type: "Defender" },
    { name: "Amaru", type: "Attacker" },
    { name: "Goyo", type: "Defender" },
    { name: "Kali", type: "Attacker" },
    { name: "Wamai", type: "Defender" },
    { name: "Iana", type: "Attacker" },
    { name: "Oryx", type: "Defender" },
    { name: "Ace", type: "Attacker" },
    { name: "Melusi", type: "Defender" },
    { name: "Zero", type: "Attacker" },
    { name: "Aruni", type: "Defender" },
    { name: "Flores", type: "Attacker" },
    { name: "Thunderbird", type: "Defender" },
    { name: "Osa", type: "Attacker" },
    { name: "Thorn", type: "Defender" },
    { name: "Azami", type: "Defender" },
    { name: "Sens", type: "Attacker" },
    { name: "Grim", type: "Attacker" },
    { name: "Solis", type: "Defender" },
    { name: "Brava", type: "Attacker" },
    { name: "Fenrir", type: "Defender" },
    { name: "Ram", type: "Attacker" },
];

// Event listener for buttons
document.getElementById("defendersBtn").addEventListener("click", function() {
    shuffleAndPickOperator("Defender");
});

document.getElementById("attackersBtn").addEventListener("click", function() {
    shuffleAndPickOperator("Attacker");
});

function shuffleAndPickOperator(type) {
    let filteredOperators = operators.filter(operator => operator.type === type);
    let intervalId = setInterval(() => {
        let randomOperator = filteredOperators[Math.floor(Math.random() * filteredOperators.length)];
        document.getElementById("operatorDisplay").textContent = randomOperator.name;
    }, 100); // Change every 100ms

    setTimeout(() => {
        clearInterval(intervalId); // Stop shuffling
        let finalOperator = randomizeOperator(type);
        document.getElementById("operatorDisplay").textContent = finalOperator.name;
    }, 3000); // Stop after 3 seconds
}