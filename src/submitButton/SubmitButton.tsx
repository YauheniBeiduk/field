import React from "react";
import './style.scss';

type SubmitButtonProps = {
    isSubmitButtonVisible: boolean;
    handleSubmit: () => void;
};
const SubmitButton = ({ handleSubmit, isSubmitButtonVisible }: SubmitButtonProps) => {
 return (
     <button className='submit-btn' onClick={handleSubmit} disabled={!isSubmitButtonVisible}>
         Submit
     </button>
 )
}

export default SubmitButton;
