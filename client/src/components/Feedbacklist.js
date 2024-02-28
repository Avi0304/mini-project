import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

const Feedbacklist = ({ feedback, onDelete }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="card" style={{ width: "18rem", padding: "20px" }}>
        <div className="card-body">
          <h5 className="card-title"><b>Name: </b>{feedback.name}</h5>
          <p className="card-text">
            <b>Phone Number: </b> {feedback.phone}
          </p>
          <p className="card-text">
            <b>Message: </b> {feedback.message}
          </p>
          {onDelete && (
            <DeleteOutlined
              className="delete-icon"
              onClick={() => onDelete(feedback._id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedbacklist;
