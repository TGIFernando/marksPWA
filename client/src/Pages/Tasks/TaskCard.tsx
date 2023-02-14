import React, { useState } from "react";
import { useDoubleTap } from "use-double-tap";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import env from "ts-react-dotenv";

import { Card, Task, Initials, Icon, FormGroup } from "./TaskStyles";
import { AiOutlineDelete } from "react-icons/ai";

function TaskCard(props: any) {
  const [initials, setInitials] = useState(props.initials);
  const [doubleClick, setDoubleClick] = useState(false);

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

  const handleUnfocus = (e: any) => {
    const changes = { initials: initials };
    axiosWithAuth()
      .put(`${env.API_URL}api/tasks/${props.id}`, changes)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDoubleClick = useDoubleTap(() => {
    setDoubleClick(!doubleClick);
  });

  const handleDelete = (e: any) => {
    axiosWithAuth()
      .delete(`${env.API_URL}api/tasks/${props.id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Card {...handleDoubleClick}>
        <Task>{props.task}</Task>
        <FormGroup>
          {initials ? (
            <>
              <Initials
                type="text"
                name="formInitials"
                value={initials}
                onChange={handleInitials}
                onKeyDown={handleSubmit}
                onBlur={handleUnfocus}
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
                onBlur={handleUnfocus}
                onKeyDown={handleSubmit}
              />
            </>
          )}
          {doubleClick ? (
            <Icon>
              <AiOutlineDelete onClick={handleDelete} />
            </Icon>
          ) : (
            <></>
          )}
        </FormGroup>
      </Card>
      ;
    </div>
  );
}

export default TaskCard;
