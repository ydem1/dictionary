import React from "react";

type Props = {
  handleSubmit: () => void,
  handleReset: () => void,
  isDisable: boolean,
}

export const ControlPanel: React.FC<Props> = ({ 
  handleSubmit, 
  handleReset,
  isDisable, 
}) => {
  return (
    <div className="field is-grouped">
      <div className="control">
        <button
          onClick={handleSubmit}
          disabled={isDisable}
          className="button is-link"
        >
          Submit
        </button>
      </div>
      <div className="control">
        <button
          className="button is-link is-light"
          onClick={handleReset}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
