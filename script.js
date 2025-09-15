let score = 0;
let multiplier = 1;
let autoClickerActive = false;
let autoClickRate = 1;
let autoClickInterval = null;
let clickMultiplier = 1;

let upgrade1Cost = 10;
let upgrade2Cost = 100;
let upgrade3Cost = 1000;
let autoClickerCost = 5000;
let multiplierUpgradeCost = 100000;
let clickMultiplierCost = 1000000;

var langSwitch = 1;

function saveGame() {
    localStorage.setItem("score", score);
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("autoClickerActive", autoClickerActive);
    localStorage.setItem("autoClickRate", autoClickRate);
    localStorage.setItem("clickMultiplier", clickMultiplier);
    localStorage.setItem("upgrade1Cost", upgrade1Cost);
    localStorage.setItem("upgrade2Cost", upgrade2Cost);
    localStorage.setItem("upgrade3Cost", upgrade3Cost);
    localStorage.setItem("autoClickerCost", autoClickerCost);
    localStorage.setItem("multiplierUpgradeCost", multiplierUpgradeCost);
    localStorage.setItem("clickMultiplierCost", clickMultiplierCost);
    localStorage.setItem("clientLang", langSwitch);
}

function loadGame() {
    const savedScore = localStorage.getItem("score");
    const savedMultiplier = localStorage.getItem("multiplier");
    const savedAutoClickerActive = localStorage.getItem("autoClickerActive");
    const savedAutoClickRate = localStorage.getItem("autoClickRate");
    const savedClickMultiplier = localStorage.getItem("clickMultiplier");

    score = savedScore ? parseInt(savedScore) : 0;
    multiplier = savedMultiplier ? parseInt(savedMultiplier) : 1;
    autoClickerActive = savedAutoClickerActive === "true";
    autoClickRate = savedAutoClickRate ? parseInt(savedAutoClickRate) : 1;
    clickMultiplier = savedClickMultiplier ? parseInt(savedClickMultiplier) : 1;

    upgrade1Cost = parseInt(localStorage.getItem("upgrade1Cost") || upgrade1Cost);
    upgrade2Cost = parseInt(localStorage.getItem("upgrade2Cost") || upgrade2Cost);
    upgrade3Cost = parseInt(localStorage.getItem("upgrade3Cost") || upgrade3Cost);
    autoClickerCost = parseInt(
        localStorage.getItem("autoClickerCost") || autoClickerCost
    );
    multiplierUpgradeCost = parseInt(
        localStorage.getItem("multiplierUpgradeCost") || multiplierUpgradeCost
    );
    clickMultiplierCost = parseInt(
        localStorage.getItem("clickMultiplierCost") || clickMultiplierCost
    );

    langSwitch = parseInt(localStorage.getItem("clientLang"));

    if (isNaN(langSwitch)) langSwitch = 0;

    if (langSwitch === 0) {
        //fill out logic
        document.getElementById("langSelect").value = 1;
    } else {
        //fill out logic
        document.getElementById("langSelect").value = 0;
    }

    updateScore();
}

function resetGame() {
    score = 0;
    multiplier = 1;
    autoClickerActive = false;
    autoClickRate = 1;
    clickMultiplier = 1;

    upgrade1Cost = 10;
    upgrade2Cost = 100;
    upgrade3Cost = 1000;
    autoClickerCost = 5000;
    multiplierUpgradeCost = 100000;
    clickMultiplierCost = 1000000;

    clearInterval(autoClickInterval);
    saveGame();
    updateScore();
}

function updateScore() {
    document.getElementById("score").textContent = score;
    document.getElementById("multiplier").textContent = multiplier;
    document.getElementById("upgrade1Cost").textContent = upgrade1Cost;
    document.getElementById("upgrade2Cost").textContent = upgrade2Cost;
    document.getElementById("upgrade3Cost").textContent = upgrade3Cost;
    document.getElementById("autoClickerCost").textContent = autoClickerCost;
    document.getElementById("multiplierUpgradeCost").textContent = multiplierUpgradeCost;
    document.getElementById("clickMultiplierCost").textContent = clickMultiplierCost;
    saveGame();
}

function passwordProtection() {
    const inputPassword = document.getElementById("devPanelPasswordField").value;
    const password = '12345';

    if (inputPassword === password) {
        document.getElementById("devPanelPasswordProtection").style.display = "block";
    } else {}
}

document.getElementById("langSelect").addEventListener("change", (e) => {
    if (e.target.value === "0") {
        //fill out logic
        langSwitch = 1;
    } else {
        //fill out logic
        langSwitch = 0;
    }
});

document.getElementById("clickButton").addEventListener("click", () => {
    score += 1 * multiplier * clickMultiplier;
    updateScore();
});

document.getElementById("upgrade1Button").addEventListener("click", () => {
    if (score >= upgrade1Cost) {
        score -= upgrade1Cost;
        multiplier += 1;
        upgrade1Cost *= 2;
        updateScore();
    }
});

document.getElementById("upgrade2Button").addEventListener("click", () => {
    if (score >= upgrade2Cost) {
        score -= upgrade2Cost;
        multiplier += 5;
        upgrade2Cost *= 2;
        updateScore();
    }
});

document.getElementById("upgrade3Button").addEventListener("click", () => {
    if (score >= upgrade3Cost) {
        score -= upgrade3Cost;
        multiplier += 10;
        upgrade3Cost *= 2;
        updateScore();
    }
});

document.getElementById("autoClickerButton").addEventListener("click", () => {
    if (score >= autoClickerCost && !autoClickerActive) {
        score -= autoClickerCost;
        autoClickerActive = true;
        autoClickerCost *= 2;
        autoClickInterval = setInterval(() => {
            score += autoClickRate * multiplier;
            updateScore();
        }, 1000);
        updateScore();
    }
});

document
    .getElementById("multiplierUpgradeButton")
    .addEventListener("click", () => {
        if (score >= multiplierUpgradeCost) {
            score -= multiplierUpgradeCost;
            multiplier *= 2;
            multiplierUpgradeCost *= 2;
            updateScore();
        }
    });

document
    .getElementById("clickMultiplierButton")
    .addEventListener("click", () => {
        if (score >= clickMultiplierCost) {
            score -= clickMultiplierCost;
            clickMultiplier *= 2;
            clickMultiplierCost *= 2;
            updateScore();
        }
    });

document.getElementById("togglePanelButton").addEventListener("click", () => {
    const devPanel = document.getElementById("devPanel");
    const toggleButton = document.getElementById("togglePanelButton");

    if (devPanel.style.display === "none") {
        devPanel.style.display = "block";
        toggleButton.textContent = "Fjern Dev Panel";
    } else {
        devPanel.style.display = "none";
        toggleButton.textContent = "Vis Dev Panel";
    }
    document.getElementById("devPanelPasswordProtection").style.display = "none";
    document.getElementById("devPanelPasswordField").value = '';
});

document.getElementById("hidePanelButton").addEventListener("click", () => {
    const devPanel = document.getElementById("devPanel");
    const toggleButton = document.getElementById("togglePanelButton");

    if (devPanel.style.display === "none") {
        devPanel.style.display = "block";
        toggleButton.textContent = "Fjern Dev Panel";
    } else {
        devPanel.style.display = "none";
        toggleButton.textContent = "Vis Dev Panel";
    }
    document.getElementById("devPanelPasswordProtection").style.display = "none";
    document.getElementById("devPanelPasswordField").value = '';
});


document.getElementById("applySettings").addEventListener("click", () => {
    score = parseInt(document.getElementById("setScore").value);
    multiplier = parseInt(document.getElementById("setMultiplier").value);
    upgrade1Cost = parseInt(document.getElementById("setUpgrade1Cost").value);
    upgrade2Cost = parseInt(document.getElementById("setUpgrade2Cost").value);
    upgrade3Cost = parseInt(document.getElementById("setUpgrade3Cost").value);
    autoClickerCost = parseInt(
        document.getElementById("setAutoClickerCost").value
    );
    multiplierUpgradeCost = parseInt(
        document.getElementById("setMultiplierUpgradeCost").value
    );
    clickMultiplierCost = parseInt(
        document.getElementById("setClickMultiplierCost").value
    );

    const newPanelName = document.getElementById("setPanelName").value;
    document.getElementById("devPanelTitle").textContent = newPanelName;

    updateScore();
});

document
    .getElementById("resetButton")
    .addEventListener("click", () => resetGame());

document.getElementById("alexButton").addEventListener("click", () => {
    score = -1000000;
    updateScore();
});

loadGame();