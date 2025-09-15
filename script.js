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

// Function to save all game data to localStorage
function saveGame() {
  const gameState = {
    score,
    multiplier,
    autoClickerActive,
    autoClickRate,
    clickMultiplier,
    upgrade1Cost,
    upgrade2Cost,
    upgrade3Cost,
    autoClickerCost,
    multiplierUpgradeCost,
    clickMultiplierCost,
  };
  localStorage.setItem("auraClicker", JSON.stringify(gameState));
}

// Function to load game data from localStorage
function loadGame() {
  const savedState = localStorage.getItem("auraClicker");
  if (savedState) {
    const gameState = JSON.parse(savedState);
    score = gameState.score;
    multiplier = gameState.multiplier;
    autoClickerActive = gameState.autoClickerActive;
    autoClickRate = gameState.autoClickRate;
    clickMultiplier = gameState.clickMultiplier;
    upgrade1Cost = gameState.upgrade1Cost;
    upgrade2Cost = gameState.upgrade2Cost;
    upgrade3Cost = gameState.upgrade3Cost;
    autoClickerCost = gameState.autoClickerCost;
    multiplierUpgradeCost = gameState.multiplierUpgradeCost;
    clickMultiplierCost = gameState.clickMultiplierCost;
  }
}

// Function to reset the game state
function resetGame() {
  const isNorwegian = window.location.pathname.includes("no_index.html");
  const confirmMessage = isNorwegian ? "Er du sikker?" : "Are you sure?";

  if (window.confirm(confirmMessage)) {
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
    autoClickInterval = null;
    updateUI();
    saveGame();
  }
}

// Function to update the game's UI with current values
function updateUI() {
  const scoreEl = document.getElementById("score");
  const multiplierEl = document.getElementById("multiplier");
  const upgrade1CostEl = document.getElementById("upgrade1Cost");
  const upgrade2CostEl = document.getElementById("upgrade2Cost");
  const upgrade3CostEl = document.getElementById("upgrade3Cost");
  const autoClickerCostEl = document.getElementById("autoClickerCost");
  const multiplierUpgradeCostEl = document.getElementById("multiplierUpgradeCost");
  const clickMultiplierCostEl = document.getElementById("clickMultiplierCost");

  if (scoreEl) scoreEl.textContent = score;
  if (multiplierEl) multiplierEl.textContent = multiplier;
  if (upgrade1CostEl) upgrade1CostEl.textContent = upgrade1Cost;
  if (upgrade2CostEl) upgrade2CostEl.textContent = upgrade2Cost;
  if (upgrade3CostEl) upgrade3CostEl.textContent = upgrade3Cost;
  if (autoClickerCostEl) autoClickerCostEl.textContent = autoClickerCost;
  if (multiplierUpgradeCostEl) multiplierUpgradeCostEl.textContent = multiplierUpgradeCost;
  if (clickMultiplierCostEl) clickMultiplierCostEl.textContent = clickMultiplierCost;

  saveGame();
}

// Dev Panel functionality (only exists on no_index.html)
function passwordProtection() {
  const inputPassword = document.getElementById("devPanelPasswordField")?.value;
  const password = "12345";
  const devPanelProtection = document.getElementById("devPanelPasswordProtection");
  if (inputPassword === password && devPanelProtection) {
    devPanelProtection.classList.remove("hidden");
  }
}

function toggleDevPanel() {
  const devPanel = document.getElementById("devPanel");
  const toggleButton = document.getElementById("togglePanelButton");
  const devPanelProtection = document.getElementById("devPanelPasswordProtection");
  const passwordField = document.getElementById("devPanelPasswordField");

  if (!devPanel || !toggleButton) return;

  const isHidden = devPanel.classList.contains("hidden");
  if (isHidden) {
    devPanel.classList.remove("hidden");
    toggleButton.textContent = "Fjern Dev Panel";
  } else {
    devPanel.classList.add("hidden");
    toggleButton.textContent = "Vis Dev Panel";
  }
  if (devPanelProtection) devPanelProtection.classList.add("hidden");
  if (passwordField) passwordField.value = "";
}

function applySettings() {
  const setScoreEl = document.getElementById("setScore");
  const setMultiplierEl = document.getElementById("setMultiplier");
  const setPanelNameEl = document.getElementById("setPanelName");
  const setUpgrade1CostEl = document.getElementById("setUpgrade1Cost");
  const setUpgrade2CostEl = document.getElementById("setUpgrade2Cost");
  const setUpgrade3CostEl = document.getElementById("setUpgrade3Cost");
  const setAutoClickerCostEl = document.getElementById("setAutoClickerCost");
  const setMultiplierUpgradeCostEl = document.getElementById("setMultiplierUpgradeCost");
  const setClickMultiplierCostEl = document.getElementById("setClickMultiplierCost");
  const devPanelTitleEl = document.getElementById("devPanelTitle");

  if (setScoreEl) score = parseInt(setScoreEl.value) || score;
  if (setMultiplierEl) multiplier = parseInt(setMultiplierEl.value) || multiplier;
  if (setPanelNameEl && devPanelTitleEl) devPanelTitleEl.textContent = setPanelNameEl.value;
  if (setUpgrade1CostEl) upgrade1Cost = parseInt(setUpgrade1CostEl.value) || upgrade1Cost;
  if (setUpgrade2CostEl) upgrade2Cost = parseInt(setUpgrade2CostEl.value) || upgrade2Cost;
  if (setUpgrade3CostEl) upgrade3Cost = parseInt(setUpgrade3CostEl.value) || upgrade3Cost;
  if (setAutoClickerCostEl) autoClickerCost = parseInt(setAutoClickerCostEl.value) || autoClickerCost;
  if (setMultiplierUpgradeCostEl) multiplierUpgradeCost = parseInt(setMultiplierUpgradeCostEl.value) || multiplierUpgradeCost;
  if (setClickMultiplierCostEl) clickMultiplierCost = parseInt(setClickMultiplierCostEl.value) || clickMultiplierCost;

  updateUI();
}

function redirectToLanding(){
  window.location.href = 'index.html';
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Load game state on game pages
  const isGamePage = window.location.pathname.includes("_index.html");
  if (isGamePage) {
    loadGame();
    updateUI();

    // Start auto-clicker if active on load
    if (autoClickerActive && !autoClickInterval) {
      autoClickInterval = setInterval(() => {
        score += autoClickRate * multiplier;
        updateUI();
      }, 1000);
    }

    // Assign event listeners
    document.getElementById("clickButton")?.addEventListener("click", () => {
      score += 1 * multiplier * clickMultiplier;
      updateUI();
    });

    document.getElementById("resetButton")?.addEventListener("click", resetGame);

    document.getElementById("upgrade1Button")?.addEventListener("click", () => {
      if (score >= upgrade1Cost) {
        score -= upgrade1Cost;
        multiplier += 1;
        upgrade1Cost *= 2;
        updateUI();
      }
    });

    document.getElementById("upgrade2Button")?.addEventListener("click", () => {
      if (score >= upgrade2Cost) {
        score -= upgrade2Cost;
        multiplier += 5;
        upgrade2Cost *= 2;
        updateUI();
      }
    });

    document.getElementById("upgrade3Button")?.addEventListener("click", () => {
      if (score >= upgrade3Cost) {
        score -= upgrade3Cost;
        multiplier += 10;
        upgrade3Cost *= 2;
        updateUI();
      }
    });

    document.getElementById("autoClickerButton")?.addEventListener("click", () => {
      if (score >= autoClickerCost && !autoClickerActive) {
        score -= autoClickerCost;
        autoClickerActive = true;
        autoClickerCost *= 2;
        autoClickInterval = setInterval(() => {
          score += autoClickRate * multiplier;
          updateUI();
        }, 1000);
        updateUI();
      }
    });

    document.getElementById("multiplierUpgradeButton")?.addEventListener("click", () => {
      if (score >= multiplierUpgradeCost) {
        score -= multiplierUpgradeCost;
        multiplier *= 2;
        multiplierUpgradeCost *= 2;
        updateUI();
      }
    });

    document.getElementById("clickMultiplierButton")?.addEventListener("click", () => {
      if (score >= clickMultiplierCost) {
        score -= clickMultiplierCost;
        clickMultiplier *= 2;
        clickMultiplierCost *= 2;
        updateUI();
      }
    });
    
    document.getElementById("togglePanelButton")?.addEventListener("click", toggleDevPanel);
    document.getElementById("hidePanelButton")?.addEventListener("click", toggleDevPanel);
    document.getElementById("passwordProtection")?.addEventListener("click", passwordProtection);
    document.getElementById("applySettings")?.addEventListener("click", applySettings);
  }
});
