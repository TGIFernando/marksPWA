import React, { useState } from "react";
import { Card, Task, Initials } from "./TaskStyles";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import env from "ts-react-dotenv";

function TaskCard(props: any) {
  const [initials, setInitials] = useState(props.initials);
  const handleInitials = (e: any) => {
    e.preventDefault();
    setInitials(e.target.value);
  };
  const handleSubmit = (e: any) => {
    if (e.key === "Enter") {
      const changes = { initials: initials };
      axiosWithAuth()
        .put(`${env.API_URL}api/tasks/${props.id}`, changes)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      return;
    }
  };
  return (
    <div>
      <Card>
        <Task>{props.task}</Task>
        {initials ? (
          <>
            <Initials
              type="text"
              name="formInitials"
              value={initials}
              onChange={handleInitials}
              onKeyDown={handleSubmit}
              placeholder={initials}
            />
          </>
        ) : (
          <>
            <Initials
              type="text"
              name="formInitials"
              placeholder="___"
              onChange={handleInitials}
              onKeyDown={handleSubmit}
            />
          </>
        )}
      </Card>
      ;
    </div>
  );
}

export default TaskCard;
