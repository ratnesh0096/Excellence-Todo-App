import React, { useState } from "react";

const DeleteTask = ({
  list,
  setList,
  canEdit,
  setEdit,
  handleEdit,
  handleDelete
}) => {
  const [editText, setEditText] = useState("");
  const handleEditedTask = (index) => {
    const copiedList = [...list];
    const copiedCanEdit = [...canEdit];
    copiedList[index] = editText;
    copiedCanEdit[index] = false;
    setList(copiedList);
    setEdit(copiedCanEdit);
    setEditText("");
  };
  return (
    <div>
      {list.map((item, index) => (
        <h3>
          <div className="list">{item}</div>
          {!canEdit[index] && (
            <button value={item} className="edit" onClick={handleEdit()}>
              Edit
            </button>
          )}
          {!canEdit[index] && (
            <button
              value={item}
              className="delete"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          )}
          {canEdit[index] && (
            <textarea
              className="editTask"
              onChange={(e) => setEditText(e.target.value)}
            ></textarea>
          )}
          {editText && canEdit[index] && (
            <button
              className="saveTask"
              onClick={() => handleEditedTask(index)}
            >
              Save
            </button>
          )}
        </h3>
      ))}
    </div>
  );
};

export default DeleteTask;
