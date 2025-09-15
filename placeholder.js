const element = [
	{
	"id": "scoreP",
	"langNorw": "Poengsum: <span id='score'>0</span>",
	"langEngl": "",
	},
	{ 
	"id": "clickMultP",
	"langNorw": "Klikk-multiplikator: <span id='multiplier'>1</span>",
	"langEngl": "",
	},
	{ 
	"id": "clickButton",
	"langNorw": "Klikk meg!",
	"langEngl": "Click Me!",
	},
	{ 
	"id": "upgrade1Button",
	"langNorw": "Oppgradering 1 (Koster <span id='upgrade1Cost'>10</span> poeng)",
	"langEngl": "",
	},
	{ 
	"id": "upgrade2Button",
	"langNorw": "Oppgradering 2 (Koster <span id='upgrade2Cost'>100</span> poeng)",
	"langEngl": "",
	},
	{ 
	"id": "upgrade3Button",
	"langNorw": "Oppgradering 3 (Koster <span id='upgrade3Cost'>1000</span> poeng)",
	"langEngl": "",
	},
	{ 
	"id": "autoClickerButton",
	"langNorw": "Auto Clicker (Koster <span id='autoClickerCost'>5000</span> poeng)",
	"langEngl": "",
	},
	{ 
	"id": "multiplierUpgradeButton",
	"langNorw": "Multiplier Oppgradering (Koster <span id='multiplierUpgradeCost'>100000</span> poeng)",
	"langEngl": "",
	},
	{ 
	"id": "clickMultiplierButton",
	"langNorw": "Click Multiplier Oppgradering (Koster <span id='clickMultiplierCost'>1000000</span> poeng)",
	"langEngl": "",
	},
	{ 
	"id": "togglePanelButton",
	"langNorw": "Vis Dev Panel",
	"langEngl": "",
	},
	{ 
	"id": "passwordProtection",
	"langNorw": "",
	"langEngl": "confirm password",
	},
	{ 
	"id": "setScoreLabel",
	"langNorw": "Sett poengsum:",
	"langEngl": "",
	},
	{ 
	"id": "setMultButtonLabel",
	"langNorw": "Sett klikk-multiplikator:",
	"langEngl": "",
	},
	{ 
	"id": "setPanelNameLabel",
	"langNorw": "Endre panelnavn:",
	"langEngl": "",
	},
	{ 
	"id": "setUpgrade1CostLabel",
	"langNorw": "Sett kostnad for Oppgradering 1:",
	"langEngl": "",
	},
	{ 
	"id": "setUpgrade2CostLabel",
	"langNorw": "Sett kostnad for Oppgradering 2:",
	"langEngl": "",
	},
	{ 
	"id": "setUpgrade3CostLabel",
	"langNorw": "Sett kostnad for Oppgradering 3:",
	"langEngl": "",
	},
	{ 
	"id": "setAutoClickLabel",
	"langNorw": "Sett kostnad for Auto Clicker:",
	"langEngl": "",
	},
	{ 
	"id": "setMultUpgradeCostLabel",
	"langNorw": "Sett kostnad for Multiplier Oppgradering:",
	"langEngl": "",
	},
	{ 
	"id": "setClickMultCostLabel",
	"langNorw": "Sett kostnad for Click Multiplier Oppgradering:",
	"langEngl": "",
	},
]

// element[0].id = ""scoreP"
// element[10].langEnhl = ""confirm password"

function toggleLangTest(index) {
	const el = document.getElementById(element[index].id);
	if (el.innerHTML === element[index].langEngl) {
		el.innerHTML = element[index].langNorw;
	} else {
		el.innerHTML = element[index].langEngl;
	}
}}

toggleLangTest(0); // toggles scoreP
toggleLangTest(2); // toggles clickButton






function toggleLang() {
  for (let i = 0; i < element.length; i++) {
    const el = document.getElementById(element[i].id);
    if (!el) continue; // skip if element not found in DOM

    if (el.innerHTML === element[i].langEngl) {
      el.innerHTML = element[i].langNorw;
    } else {
      el.innerHTML = element[i].langEngl;
    }
  }
}

toggleLang() //swaps whole page language back and forth