import React, { useState } from "react";
import PageTemp from "../../Context/PageTemp";
import Oops from "../../Context/Oops";

import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import env from "ts-react-dotenv";

import { List, ListItem, Card } from "./TaskStyles";

function Tasks() {
  const [error, setError] = useState<boolean>(false);
  return <PageTemp page={error ? <Oops /> : <></>} />;
}

export default Tasks;
