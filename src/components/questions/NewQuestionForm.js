import React from "react";
import { routeStyle } from "../style";
const NewQuestionForm = props => {
  return (
    <div style={{ ...routeStyle }}>
    <p>Add a Question</p>
      <form>
        <input type="text" placeholder="Object Key" disabled={!props.user && 'disable'}/>
        <input type="text" placeholder="Question" disabled={!props.user && 'disable'}/>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewQuestionForm