import React, { useState, useEffect } from "react";
import PageTemp from "../../Context/PageTemp";
import Oops from "../../Context/Oops";
import TaskCard from "./TaskCard";
import Toggle from "../../Context/Toggle";

import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import env from "ts-react-dotenv";

type TaskData = {
  id: number;
  initials: any;
  notes: any;
  shift: string;
  task: string;
  completed: boolean;
};

function Tasks() {
  const [error, setError] = useState<boolean>(false);
  const [opening, setOpening] = useState<TaskData[]>([]);
  const [closing, setClosing] = useState<TaskData[]>([]);
  const [choice, setChoice] = useState<boolean>(false);

  useEffect(() => {
    axiosWithAuth()
      .get(`${env.API_URL}api/tasks`)
      .then((res) => {
        setClosing([]);
        setOpening([]);
        res.data.forEach((data: TaskData) => {
          switch (data.shift) {
            case "opening":
              setOpening((items) => {
                return [...items, data];
              });
              break;
            case "closing":
              setClosing((items) => {
                return [...items, data];
              });
              break;
            default:
              break;
          }
        });
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  const handleClick = () => {
    setChoice(!choice);
  };

  return (
    <PageTemp
      page={
        error ? (
          <Oops />
        ) : (
          <>
            <Toggle toggled={choice} onClick={handleClick} />
            {choice ? (
              <>
                {closing.map((item) => {
                  return (
                    <TaskCard
                      key={item.id}
                      task={item.task}
                      shift={item.shift}
                      notes={item.notes}
                      initials={item.initials}
                      completed={item.completed}
                    />
                  );
                })}
              </>
            ) : (
              <>
                {opening.map((item) => {
                  return (
                    <TaskCard
                      key={item.id}
                      task={item.task}
                      shift={item.shift}
                      notes={item.notes}
                      initials={item.initials}
                      completed={item.completed}
                    />
                  );
                })}
              </>
            )}
          </>
        )
      }
    />
  );
}

export default Tasks;
