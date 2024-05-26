import React, { useState } from "react";
import { Typography, Radio, FormControl, FormControlLabel, RadioGroup } from "@mui/material";

export const QuizQuestion = ({question}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div key={question.id}>
      <Typography variant="h5">{question.question}</Typography>
      <FormControl component="fieldset">
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          {question.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  )
}