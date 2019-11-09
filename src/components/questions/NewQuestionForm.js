import React from "react";
import { routeStyle } from "../style";
const NewQuestionForm = props => {
  console.log("props", props);
  return (
    <div style={{ ...routeStyle }}>
      <div>
        <p>Add a Question</p>
        <form>
          <input
            type="text"
            placeholder="Object Key"
            disabled={!props.user && "disable"}
          />
          <br />
          <input
            type="text"
            placeholder="Question"
            disabled={!props.user && "disable"}
          />
          <br />
          <br />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewQuestionForm;
