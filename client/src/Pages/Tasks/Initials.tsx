import React from "react";

function InitialForm(props: any) {
  return (
    <form>
      <input type="text" name={props.name} value={props.value}>
        Initials here
      </input>
    </form>
  );
}

export default InitialForm;
