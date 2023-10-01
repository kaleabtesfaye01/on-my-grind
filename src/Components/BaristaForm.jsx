import React, { Component, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../data/drinks.json";

const BaristaForm = () => {
  const [correct_temp, setCheckedtemp] = useState("");
  const [correct_syrup, setCheckedSyrup] = useState("");
  const [correct_milk, setCheckedMilk] = useState("");
  const [correct_blended, setCheckedBlended] = useState("");

  const [inputs, setInputs] = useState({
    temp: "",
    milk: "",
    syrup: "",
    blended: "",
  });

  const ingredients = {
    temp: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"],
  };

  const [currentDrink, setCurrentDrink] = useState("");
  const [trueRecipe, setTrueRecipe] = useState({});

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  };

  const onNewDrink = () => {
    setInputs({
      temp: "",
      milk: "",
      syrup: "",
      blended: "",
    });
    setCheckedtemp("");
    setCheckedSyrup("");
    setCheckedMilk("");
    setCheckedBlended("");
    getNextDrink();
  };

  const onCheckAnswer = () => {
    if (trueRecipe.temp != inputs["temp"]) {
      setCheckedtemp("wrong");
    } else {
      setCheckedtemp("correct");
    }

    if (trueRecipe.syrup != inputs["syrup"]) {
      setCheckedSyrup("wrong");
    } else {
      setCheckedSyrup("correct");
    }

    if (trueRecipe.milk != inputs["milk"]) {
      setCheckedMilk("wrong");
    } else {
      setCheckedMilk("correct");
    }

    if (trueRecipe.blended != inputs["blended"]) {
      setCheckedBlended("wrong");
    } else {
      setCheckedBlended("correct");
    }

    if (!ingredients["temp"].includes(inputs["temp"])) {
      alert("Incorrect temperature");
    }

    if (!ingredients["syrup"].includes(inputs["syrup"])) {
      alert("Incorrect syrup");
    }

    if (!ingredients["milk"].includes(inputs["milk"])) {
      alert("Incorrect milk");
    }

    if (!ingredients["blended"].includes(inputs["blended"])) {
      alert("Incorrect blended");
    }
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>

      <div className="drink-container">
        <h2 className="mini-header">
          {currentDrink}
        </h2>
        <button
            type="new-drink-button"
            className="button newdrink"
            onClick={onNewDrink}
          >
            🔄
          </button>
      </div>

      <form className="container">
        <div className="mini-container">
          <h3>Temperature</h3>
          <div className="answer-space" id={correct_temp}>
            {inputs["temp"]}
          </div>
          <RecipeChoices
            handleChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            label="temp"
            choices={ingredients["temp"]}
            checked={inputs["temp"]}
          />
        </div>

        <div className="mini-container">
          <h3>Milk</h3>
          <div className="answer-space" id={correct_milk}>
            {inputs["milk"]}
          </div>
          <RecipeChoices
            handleChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
          />
        </div>

        <div className="mini-container">
          <h3>Syrup</h3>
          <div className="answer-space" id={correct_syrup}>
            {inputs["syrup"]}
          </div>
          <RecipeChoices
            handleChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            label="syrup"
            choices={ingredients["syrup"]}
            checked={inputs["syrup"]}
          />
        </div>

        <div className="mini-container">
          <h3>Blended</h3>
          <div className="answer-space" id={correct_blended}>
            {inputs["blended"]}
          </div>
          <RecipeChoices
            handleChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
          />
        </div>
      </form>

      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
    </div>
  );
};

export default BaristaForm;
