import React, {Component, useEffect, useState} from "react";

const RecipeChoices = ({handleChange, label, choices, checked}) => {
    return (
        <div className="radio-buttons">
            <input
                type="text"
                name={label}
                value={checked}
                onChange={handleChange}
                className="textbox"
                placeholder="Guess the ingredient..."
            />
            {choices && choices.map((choice) => (
                <li key={choice}>
                    {choice}
                </li>
            ))}
        </div>
    )
};

export default RecipeChoices;