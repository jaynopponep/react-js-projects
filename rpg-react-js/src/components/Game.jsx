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
    CAVE: {
        one: "Fight slime",
        two: "Fight fanged beast",
        three: "Go to town square"
    }
};
const WEAPONS = {
    STICK: {
        name: "stick",
        power: 5
    },
    DAGGER: {
        name: "dagger",
        power: 30
    },
    CLAW_HAMMER: {
        name: "claw hammer",
        power: 50
    },
    SWORD: {
        name: "sword",
        power: 100
    }
}
function Game() {
    const [inventory, setInventory] = useState(["stick"]);
    const [currentWeapon, setCurrentWeapon] = useState(0);
    const [buttons, setButtons] = useState(ACTIONS.TOWN_SQUARE);
    const [xp, setXp] = useState(0);
    const [health, setHealth] = useState(100);
    const [gold, setGold] = useState(50);
    const [text, setText] = useState("Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town.\n" +
        "                You are in the town square. Where do you want to go? Use the buttons above.");
    function ActionButton({ text, onClick }) {
        return <button onClick={onClick}>{text}</button>;
    }
    function getButtonOneAction(buttonText) {
        if (buttonText === ACTIONS.TOWN_SQUARE.one) {
            return goStore;
        } else if (buttonText === ACTIONS.STORE.one) {
            return buyHealth;
        } else {
            return fightSlime;
        }
    }

    function getButtonTwoAction(buttonText) {
        if (buttonText === ACTIONS.TOWN_SQUARE.two) {
            return goCave;
        } else if (buttonText === ACTIONS.STORE.two) {
            return buyWeapon;
        } else {
            return goTownSquare;
        }
    }
    function getButtonThreeAction(buttonText) {
        if (buttonText === ACTIONS.STORE.three || buttonText === ACTIONS.CAVE.three) {
            return goTownSquare;
        } else if (buttonText === ACTIONS.TOWN_SQUARE.three) {
            return fightDragon;
        }
    }

    const goTownSquare = () => {
        toast("Returning to town square...");
        setButtons(ACTIONS.TOWN_SQUARE);
    };

    const goStore = () => {
        toast("Going to store...");
        setButtons(ACTIONS.STORE);
    };

    const goCave = () => {
        toast("You enter the cave. You see some monsters.");
        setButtons(ACTIONS.CAVE);
    };

    const fightDragon = () => {
        toast("Going to fight the dragon...");
    };
    const buyHealth = () => {
        if (gold <= 0) {
            toast("Insufficient amount of gold...");
            return;
        }
        toast("Buying 10 health...");
        setGold(gold - 10);
        setHealth(health + 10);
    };
    const buyWeapon = () => {
        if (gold > 30) {
            setGold(gold - 30);
            toast("Purchasing a dagger...");
            const newWeaponIndex = currentWeapon + 1;
            setCurrentWeapon(newWeaponIndex);
            const newWeapon = WEAPONS[Object.keys(WEAPONS)[newWeaponIndex]].name;
            setInventory([...inventory, newWeapon]);
            setText(`You now have a ${newWeapon}.`);
        }

    };
    const fightSlime = () => {
      toast("Fighting slime...");
    };

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
                <span className="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
                <span className="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
            </div>
            <div id="text">
                {text}
            </div>
        </div>
    );
}

export default Game;