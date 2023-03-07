import React from "react";

type Props = { handleChange; label; choices; checked };

function RecipeChoices({ handleChange, label, choices, checked }: Props) {
  return (
    <div>
      <div className="radio-buttons">
        {choices &&
          choices.map((choice) => (
            <li key={choice}>
              <input
                id={choice}
                value={choice}
                name={label}
                type="radio"
                onChange={handleChange}
                checked={checked == choice}
              />
              {choice}
            </li>
          ))}
      </div>
    </div>
  );
}

export default RecipeChoices;
