import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { userState } from "../../Atoms/UserState";
import { dayState } from "../../Atoms/DayState";

import PageTemp from "../../Context/PageTemp";
import Oops from "../../Context/Oops";
import TaskCard from "./TaskCard";
import PostTask from "./PostTask";
import Toggle from "../../Context/Toggle";

import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import env from "ts-react-dotenv";
import { TaskContainer } from "./TaskStyles";

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
  const [day, setDay] = useRecoilState(dayState);
  const user = useRecoilValue(userState);

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
  }, [day]);

  const handleClick = () => {
    setDay(!day);
  };

  return (
    <PageTemp
      page={
        error ? (
          <Oops />
        ) : (
          <>
            <Toggle toggled={day} onClick={handleClick} />
            {day ? (
              <TaskContainer>
                {closing.map((item) => {
                  return (
                    <TaskCard
                      key={item.id}
                      id={item.id}
                      task={item.task}
                      shift={item.shift}
                      notes={item.notes}
                      initials={item.initials}
                      completed={item.completed}
                    />
                  );
                })}
              </TaskContainer>
            ) : (
              <TaskContainer>
                {opening.map((item) => {
                  return (
                    <TaskCard
                      key={item.id}
                      id={item.id}
                      task={item.task}
                      shift={item.shift}
                      notes={item.notes}
                      initials={item.initials}
                      completed={item.completed}
                    />
                  );
                })}
              </TaskContainer>
            )}
            {user.admin ? (
              <>
                <PostTask />
              </>
            ) : (
              <></>
            )}
          </>
        )
      }
    />
  );
}

export default Tasks;
