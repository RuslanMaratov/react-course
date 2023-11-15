import React, { useEffect, useState } from "react";

export default function ProfileStatus({ status, updateStatus }) {
  let [editMode, setEditMode] = useState(false);
  let [statusValue, setStatusValue] = useState(status);

  useEffect(() => {
    if (statusValue !== status) {
      setStatusValue(status);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  function activateEditMode() {
    setEditMode(true);
  }
  function deActivateEditMode() {
    setEditMode(false);
    updateStatus(statusValue);
  }
  function onStatusChange(event) {
    setStatusValue(event.target.value);
  }

  return (
    <div>
      {editMode ? (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deActivateEditMode}
            value={statusValue}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>
            {status || "This user don't have status!"}
          </span>
        </div>
      )}
    </div>
  );
}
