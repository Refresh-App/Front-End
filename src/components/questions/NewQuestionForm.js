import React from "react";
import { routeStyle } from "../style";
const NewQuestionForm = () => {
  return (
    <div style={{ ...routeStyle }}>
    <p>Add a Question</p>
      <form>
        <input type="text" placeholder="Object Key"/>
        <input type="text" placeholder="Question"/>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewQuestionForm