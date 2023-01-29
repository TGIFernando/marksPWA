import React from "react";
import { Card, Task, Initials } from "./TaskStyles";

function TaskCard(props: any) {
  return (
    <div>
      <Card>
        <Task>{props.task}</Task> <Initials>{props.initials}</Initials>{" "}
      </Card>
      ;
    </div>
  );
}

export default TaskCard;
