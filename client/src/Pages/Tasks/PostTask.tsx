import React, { useState } from "react";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import env from "ts-react-dotenv";
import { useRecoilValue } from "recoil";
import { dayState } from "../../Atoms/DayState";

import { IoAddCircleSharp } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import {
  Big,
  TaskForm,
  Label,
  FormInput,
  RestartContainer,
} from "./TaskStyles";

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
  const shift = useRecoilValue(dayState) ? "closing" : "opening";
  const [click, setClick] = useState<boolean>(false);

  const onChange = (e: any) => {
    const { checked, name, type, value } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: valueToUse });
  };

  const handleSubmit = async (e: any) => {
    console.log(formState);
    await axiosWithAuth()
      .post(`${env.API_URL}api/tasks`, formState)
      .then((res) => {
        console.log(res);
        setChoice(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleResetInitials = async (e: any) => {
    await axiosWithAuth()
      .put(`${env.API_URL}api/tasks/initials/${shift}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
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
        {choice ? (
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
            <button onClick={handleSubmit}>Submit</button>
            <RestartContainer click={click} onClick={handleResetInitials}>
              <VscDebugRestart onClick={() => setClick(!click)} />
            </RestartContainer>
          </TaskForm>
        ) : (
          <></>
        )}
      </>
    </div>
  );
}

export default PostTask;
