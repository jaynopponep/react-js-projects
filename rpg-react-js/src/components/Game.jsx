import React, { useState } from "react";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Game() {
    const [buttonOneText, setButtonOneText] = useState("Go to store");
    const [buttonTwoText, setButtonTwoText] = useState("Go to cave");
    const [buttonThreeText, setButtonThreeText] = useState("Fight dragon");
    // Sets the default of buttonText as Go to store, but changes state with setButtonText in goStore function
    const goStore = () => {
      toast("Going to store...");
        setButtonOneText("Buy 10 health (10 gold)");
        setButtonTwoText("Buy weapon (30 gold)");
        setButtonThreeText("Go to town square");
    };

    const goCave = () => {
        toast("Going to cave...");
    };

    const fightDragon = () => {
        toast("Going to cave...");
    };

    const goTownSquare = () => {
        toast("Returning to town square...");
        setButtonOneText("Go to store");
        setButtonTwoText("Go to cave");
        setButtonThreeText("Fight dragon");
    };

    return (
        <div id="game">
            <ToastContainer/>
            <div id="stats">
                <span className="stat">XP: <strong><span id="xpText">0</span></strong></span>
                <span className="stat">Health: <strong><span id="healthText">100</span></strong></span>
                <span className="stat">Gold: <strong><span id="goldText">50</span></strong></span>
            </div>
            <div id="controls">
                <button id="button1" onClick={goStore}>{buttonOneText}</button>
                <button id="button2" onClick={goCave}>{buttonTwoText}</button>
                <button id="button3" onClick={buttonThreeText === "Go to town square" ? goTownSquare: fightDragon}>{buttonThreeText}</button>
            </div>
            <div id="monsterStats">
                <span className="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
                <span className="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
            </div>
            <div id="text">
                Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town.
                You are in the town square. Where do you want to go? Use the buttons above.
            </div>
        </div>
    )
}
export default Game