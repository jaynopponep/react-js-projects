import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ACTIONS = {
    TOWN_SQUARE: {
        one: "Go to store",
        two: "Go to cave",
        three: "Fight dragon"
    },
    STORE: {
        one: "Buy 10 health (10 gold)",
        two: "Buy weapon (30 gold)",
        three: "Go to town square"
    },
    STORE_SELL: {
        one: "Buy 10 health (10 gold)",
        two: "Sell weapon for 15 gold",
        three: "Go to town square"
    },
    CAVE: {
        one: "Fight slime",
        two: "Fight fanged beast",
        three: "Go to town square"
    },
    FIGHT: {
        one: "Attack",
        two: "Dodge",
        three: "Run"
    },
    KILL_MONSTER: {
        one: "Go to town square",
        two: "Go to town square",
        three: "Go to town square"
    },
    LOSE: {
        one: "REPLAY?",
        two: "REPLAY?",
        three: "REPLAY?"
    },
    WIN: {
        one: "REPLAY?",
        two: "REPLAY?",
        three: "REPLAY?"
    }
};
const WEAPONS = {
    STICK: {
        name: "Stick",
        power: 5
    },
    DAGGER: {
        name: "Dagger",
        power: 30
    },
    CLAW_HAMMER: {
        name: "Claw hammer",
        power: 50
    },
    SWORD: {
        name: "Sword",
        power: 100
    }
}

const MONSTERS = {
    SLIME: {
      name: "Slime",
      level: 2,
      health: 15
    },
    FANGED_BEAST: {
        name: "Fanged beast",
        level: 8,
        health: 60
    },
    DRAGON: {
        name: "Dragon",
        level: 20,
        health: 300
    }
}
function Game() {
    const [inventory, setInventory] = useState(["stick"]);
    const [currentWeapon, setCurrentWeapon] = useState(0);
    const [currentMonster, setCurrentMonster] = useState(0);
    const [buttons, setButtons] = useState(ACTIONS.TOWN_SQUARE);
    const [xp, setXp] = useState(0);
    const [health, setHealth] = useState(100);
    const [gold, setGold] = useState(30);
    const [monsterName, setMonsterName] = useState("Slime");
    const [monsterHealth, setMonsterHealth] = useState(0);
    const [text, setText] = useState("Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town." +
        "You are in the town square. Where do you want to go? Use the buttons above.");
    function ActionButton({ text, onClick }) {
        return <button onClick={onClick}>{text}</button>;
    }
    function getButtonOneAction(buttonText) {
        if (buttonText === ACTIONS.TOWN_SQUARE.one) {
            return goStore;
        } else if (buttonText === ACTIONS.STORE.one || buttonText === ACTIONS.STORE_SELL.one) {
            return buyHealth;
        } else if (buttonText === ACTIONS.CAVE.one) {
            return fightSlime;
        } else if (buttonText === ACTIONS.KILL_MONSTER.one) {
            return goTownSquare;
        } else if (buttonText === ACTIONS.LOSE.one) {
            return restart;
        } else if (buttonText === ACTIONS.WIN.one) {
            return restart;
        } else {
            return attack;
        }
    }

    function getButtonTwoAction(buttonText) {
        if (buttonText === ACTIONS.TOWN_SQUARE.two) {
            return goCave;
        } else if (buttonText === ACTIONS.STORE.two) {
            return buyWeapon;
        } else if (buttonText === ACTIONS.STORE_SELL.two) {
            return sellWeapon;
        } else if (buttonText === ACTIONS.CAVE.two) {
            return fightBeast;
        } else if (buttonText === ACTIONS.KILL_MONSTER.two) {
            return goTownSquare;
        } else if (buttonText === ACTIONS.LOSE.two) {
            return restart;
        } else if (buttonText === ACTIONS.WIN.two) {
            return restart;
        } else {
            return dodge;
        }
    }
    function getButtonThreeAction(buttonText) {
        if (buttonText === ACTIONS.STORE.three || buttonText === ACTIONS.CAVE.three || buttonText === ACTIONS.STORE_SELL.three) {
            return goTownSquare;
        } else if (buttonText === ACTIONS.TOWN_SQUARE.three) {
            return fightDragon;
        } else if (buttonText === ACTIONS.KILL_MONSTER.two) {
            return goTownSquare;
        } else if (buttonText === ACTIONS.LOSE.three) {
            return restart;
        } else if (buttonText === ACTIONS.WIN.three) {
            return restart;
        } else {
            return run;
        }
    }

    const goTownSquare = () => {
        const monsterStats = document.getElementById("monsterStats");
        monsterStats.style.display = "none";
        setButtons(ACTIONS.TOWN_SQUARE);
        setText("You return to the town square.");
        toast("Returning to town square...");
    };

    const restart = () => {
        const monsterStats = document.getElementById("monsterStats");
        monsterStats.style.display = "none";
        setButtons(ACTIONS.TOWN_SQUARE);
        setText("You return to the town square.");
        setXp(0);
        setHealth(100);
        setGold(50);
        setCurrentWeapon(0);
        setInventory(["stick"]);
        toast("Returning to town square...");
    };



    const goStore = () => {
        toast("Going to store...");
        setText("You enter the store. What would you like to purchase?");
        setButtons(ACTIONS.STORE);
    };

    const goCave = () => {
        toast("You enter the cave. You see some monsters.");
        setText("You enter the cave...");
        setButtons(ACTIONS.CAVE);
    };
    const buyHealth = () => {
        if (gold <= 0) {
            toast("Insufficient amount of gold...");
            return;
        }
        setText("You have purchased 10 health for 10 gold.");
        toast("Buying 10 health...");
        setGold(gold - 10);
        setHealth(health + 10);
    };
    const buyWeapon = () => {
        if (currentWeapon < 3) {
            if (gold >= 30) {
                setGold(gold - 30);
                toast("Purchasing a dagger...");
                const newWeaponIndex = currentWeapon + 1;
                setCurrentWeapon(newWeaponIndex);
                const newWeapon = WEAPONS[Object.keys(WEAPONS)[newWeaponIndex]].name;
                setInventory([...inventory, newWeapon]);
                setText(`You now have a ${newWeapon}.`);
            } else {
                setText("You don't have enough gold to purchase a new weapon.");
                setButtons(ACTIONS.STORE_SELL);
            }
        } else {
            setText("You already have the most powerful weapon.");
            setButtons(ACTIONS.STORE_SELL);
            return sellWeapon;
        }
    };
    const sellWeapon = () => {
        if (currentWeapon > 0) {
            setGold(gold + 15);
            const newWeaponIndex = currentWeapon -1;
            setCurrentWeapon(newWeaponIndex);
            const newInventory = inventory.slice(0, -1);
            setInventory(newInventory);
            const soldWeapon  = WEAPONS[Object.keys(WEAPONS)[currentWeapon]].name;
            setText(`You have sold a ${soldWeapon} for 15 gold.`);
            setButtons(ACTIONS.STORE)
        } else {
            setText("No weapons available to sell.");
            setButtons(ACTIONS.STORE);
        }
    }

    const fightSlime = () => {
        goFight(0);
    };

    const fightBeast = () => {
        goFight(1);
    }
    const fightDragon = () => {
        goFight(2);
    };
    const goFight = (newMonster) => {
        setCurrentMonster(newMonster);
        const monsterStats = document.getElementById("monsterStats");
        monsterStats.style.display = "block";
        setText("You approach a " + MONSTERS[Object.keys(MONSTERS)[newMonster]].name + "... defeat it!");
        setMonsterHealth(MONSTERS[Object.keys(MONSTERS)[newMonster]].health);
        setMonsterName(MONSTERS[Object.keys(MONSTERS)[newMonster]].name);
        setButtons(ACTIONS.FIGHT);
    };
    const attack = () => {
        let newMonsterHealth = monsterHealth;
        let newHealth = health;
        setText("You attack the " + MONSTERS[Object.keys(MONSTERS)[currentMonster]].name + " with your " +
        WEAPONS[Object.keys(WEAPONS)[currentWeapon]].name + ".");
        newHealth -= getMonsterAttackValue(MONSTERS[Object.keys(MONSTERS)[currentMonster]].level);
        setHealth(newHealth);
        if (isMonsterHit()) {
            newMonsterHealth -= (WEAPONS[Object.keys(WEAPONS)[currentWeapon]].power + Math.floor(Math.random() * xp) + 1)
            setMonsterHealth(newMonsterHealth);
        } else {
            setText("You miss.");
        }

        if (newHealth <= 0) {
            winOrLose(0);
        } else if (newMonsterHealth <= 0) {
            currentMonster === 2 ? winOrLose(1) : defeatMonster();
        }

        if (Math.random() <= .1 && inventory.length !== 1) {
            setText(" Your " + inventory.pop() + " breaks.");
            setCurrentWeapon(currentWeapon - 1);
        }
    };

    const dodge = () => {
      setText("You dodge the " + MONSTERS[Object.keys(MONSTERS)[currentMonster]].name + ".")  ;
    };

    const run = () => {
      setText("You run away back to town square!");
      return goTownSquare();
    };

    const winOrLose = (outcome) => {
        if (outcome === 0) {
            setText("You die. ☠️")
            setButtons(ACTIONS.LOSE);
        } else {
            setText("You defeat the dragon! YOU WIN THE GAME! 🎉");
            setButtons(ACTIONS.WIN);
        }
    };

    const getMonsterAttackValue = (level) => {
        const hit = (level * 5) - (Math.floor(Math.random() * xp));
        console.log(hit);
        return hit > 0 ? hit : 0;
    }

    const isMonsterHit = () => {
        return Math.random() > .2 || health < 20;
    }
    const defeatMonster = () => {
        setText("The monster screams \"Arg!\" as it dies. You gain experience points and find gold.")
        setButtons(ACTIONS.KILL_MONSTER);
        setGold(gold+Math.floor(MONSTERS[Object.keys(MONSTERS)[currentMonster]].level * 6.7));
        setXp(MONSTERS[Object.keys(MONSTERS)[currentMonster]].level);
    }
    return (
        <div id="game">
            <ToastContainer/>
            <div id="stats">
                <span className="stat">XP: <strong><span id="xpText">{xp}</span></strong></span>
                <span className="stat">Health: <strong><span id="healthText">{health}</span></strong></span>
                <span className="stat">Gold: <strong><span id="goldText">{gold}</span></strong></span>
            </div>
            <div id="controls">
                <ActionButton text={buttons.one} onClick={() => getButtonOneAction(buttons.one)()} />
                <ActionButton text={buttons.two} onClick={() => getButtonTwoAction(buttons.two)()} />
                <ActionButton text={buttons.three} onClick={() => getButtonThreeAction(buttons.three)()} />
            </div>
            <div id="monsterStats">
                <span className="stat">Monster Name: <strong><span id="monsterName">{monsterName}</span></strong></span>
                <span className="stat">Health: <strong><span id="monsterHealth">{monsterHealth}</span></strong></span>
            </div>
            <div id="text">
                {text}
            </div>
        </div>
    );
}

export default Game;