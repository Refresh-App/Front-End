import React from 'react'
import NewQuestionForm from './NewQuestionForm'
const addQuestionsCanvas = props => {
    return(
    <>
    <h1>Questions</h1>
    <NewQuestionForm user={props.user}/>
    </>
    )}

export default addQuestionsCanvas;