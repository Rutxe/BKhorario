const urlMappings = {
    "CONAN": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1505331",
    "Trances": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2597842",
    "Sotek": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=391480",
    "judas el destructor": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1661556",
    "Sephiroth": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1581809",
    "Hormiguero": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1579233",
    "Zarpwd-77": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1490633",
    "sir Angelo": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=867936",
    "karty": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=94910",
    "Captain Levi": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1583085",
    "elmaster": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1971000",
    "Baronesa Orihime [OSC]": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=75848",
    "ping pong": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2792274",
    "lastraziel": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1582778",
    "pedro el enano": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1579370",
    "ferms": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=853026",
    "darth cheese": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=460566",
    "tom becker": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1582862",
    "sir yesua": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=137755",
    "silverblade": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2789581",
    "-sanji-": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=134608",
    "trueno": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2795127",
    "-guerrera-": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2795161",
    "dinoo": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2793818",
    "cid campeador": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2791329",
    "hrdeimar": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=83112",
    "yisus craist": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2693159",
    "xander": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2791578",
    "pachancle": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1582125",
    "yugoas": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2791497",
    "berilla kimmel": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=63447",
    "skarface": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1582824",
    "demonhog": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2793820",
    "excaliburt17": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=111575",
    "super saiyan 4": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1582597",
    "ferro": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2795586",
    "Laioner": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=3297",
    "pendragon": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=121043",
    "elcantabru": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1650743",
    "blood": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2792496",
    "mayorista": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2791292",
    "sogoma": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=136230",
    "maron Yaotl": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1582888",
    "hectorov": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=111826",
    "valentinna": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=64685",
    "megaciel": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2314122",
    "alconnegro": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2749097",
    "Qui-Gon Jinn": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1582934",
    "explorer": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2795636",
    "crisrub": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=136114",
    "izaro": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=847660",
    "Sagitario": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=750746",
    "super saiyan 3": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2260043",
    "Barón Pachancle [[CAS]]": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1582125",
    "Vizconde XxAmilcaRxX": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2595600",
    "Khaleesi ": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2794480",
    "Vizconde Ken Masters [DDD]": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1583097",
    "ishtar": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2794653",
    "dark link": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2790778",
    "Khal Droggo": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=6818",
    "lord aticus": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=84933",
    "manubrio": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=457819",
    "bowen": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1579575",
    "excaliburt12": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2110",
    "orange": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=83420",
    "Ainhoa": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1980846",
    "drace": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2329725",
    "sir espina": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1605301",
    "aenarion": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=1583098",
    "luisandro": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2793804",
    "villalba ": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2793806",
    "the scorpion king": "https://s51-es.battleknight.gameforge.com/duel/duel/?enemyID=2699733"
};

let attacks = [];

function loadKnightList() {
    const container = document.getElementById('knightList');
    container.innerHTML = '';
    Object.keys(urlMappings).forEach(name => {
        const div = document.createElement('div');
        div.className = 'knight-item';
        div.textContent = name;
        div.onclick = () => {
            document.getElementById('name').value = name;
            document.querySelectorAll('.knight-item').forEach(i => i.classList.remove('selected'));
            div.classList.add('selected');
        };
        container.appendChild(div);
    });
}

function addAttack() {
    const name = document.getElementById('name').value.trim();
    const timeStr = document.getElementById('time').value.trim();
    
    if (!name || !urlMappings[name]) {
        alert('Selecciona un caballero válido');
        return;
    }
    
    const timeParts = timeStr.split('.').map(Number);
    if (timeParts.length !== 3 || timeParts.some(n => isNaN(n) || n < 0 || n > 59)) {
        alert('Formato de hora inválido. Usa hh.mm.ss (ej: 14.30.00)');
        return;
    }
    
    const now = new Date();
    const attackTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        timeParts[0],
        timeParts[1],
        timeParts[2]
    );
    
    if (attackTime < now) {
        alert('La hora ya ha pasado hoy');
        return;
    }
    
    attacks.push({ name, time: attackTime, url: urlMappings[name] });
    attacks.sort((a, b) => a.time - b.time);
    updateAttackList();
}

function updateAttackList() {
    const list = document.getElementById('attackList');
    list.innerHTML = '';
    attacks.forEach((attack, index) => {
        const item = document.createElement('div');
        item.className = 'attack-item';
        const timeStr = attack.time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        item.innerHTML = `
            <span><strong>${timeStr}</strong> - ${attack.name}</span>
            <button onclick="deleteAttack(${index})">Eliminar</button>
        `;
        list.appendChild(item);
    });
}

function deleteAttack(index) {
    attacks.splice(index, 1);
    updateAttackList();
}

loadKnightList();

setInterval(() => {
    const now = new Date();
    for (let i = attacks.length - 1; i >= 0; i--) {
        if (attacks[i].time <= now) {
            window.open(attacks[i].url, '_blank');
            attacks.splice(i, 1);
            updateAttackList();
        }
    }
}, 1000);
