import React, { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { Big, TaskForm, Label, FormInput } from "./TaskStyles";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import { Navigate } from "react-router-dom";
import env from "ts-react-dotenv";

type FormProps = {
  task: string;
  notes: string;
  shift: string;
  completed: boolean;
  initials: string;
};

function PostTask() {
  const [choice, setChoice] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormProps[]>([]);
  const [hasSubmitBeenClicked, setHasSubmitBeenClicked] =
    useState<boolean>(false);

  const onChange = (e: any) => {
    const { checked, name, type, value } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: valueToUse });
  };

  const handleSubmit = (e: any) => {
    console.log(formState);
    axiosWithAuth()
      .post(`${env.API_URL}api/tasks`, formState)
      .then((res) => {
        console.log(res);
        setChoice(false);
        setHasSubmitBeenClicked(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <>
        <Big choice={choice} onClick={() => setChoice(!choice)}>
          <IoAddCircleSharp color="#87255b" />
        </Big>
        <TaskForm choice={choice}>
          <Label htmlFor="task">Task </Label>
          <FormInput
            type="text"
            name="task"
            placeholder="Do something"
            onChange={onChange}
          />
          <Label htmlFor="notes">Notes </Label>
          <FormInput
            type="text"
            name="notes"
            placeholder="Do something"
            onChange={onChange}
          />
          <Label htmlFor="shift">Opening </Label>
          <input
            type="radio"
            name="shift"
            value="opening"
            onChange={onChange}
          />
          <Label htmlFor="shift">Closing </Label>
          <input
            type="radio"
            name="shift"
            value="closing"
            onChange={onChange}
          />
          <input type="submit" onClick={handleSubmit} />
        </TaskForm>
      </>
    </div>
  );
}

export default PostTask;
