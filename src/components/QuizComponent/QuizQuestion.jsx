import React, { useState } from "react";
import { Typography, Radio, FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

export const QuizQuestion = ({ question, control }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  if (question) {
    console.log(question.options, "fff")
    return (
      <Controller
        name={question.id}
        control={control}
        key={question.id}
        render={({ field }) => (
          <div key={question.id}>
            <Typography variant="h5">{question.question}</Typography>
            <FormControl component="fieldset">
              <RadioGroup {...field}>
                {question.options.map((option) => (
                  <FormControlLabel
                    key={option.id}
                    value={option.id}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        )}
      />
    )
  }

  return (<></>)
}