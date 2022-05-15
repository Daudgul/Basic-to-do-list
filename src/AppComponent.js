import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function AppComponent({
  data,
  addDate,
  changeDateHandler,
  editItem,
  deleteItem,
}) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = () => {
    setSelectedValue(!selectedValue);
  };
  return (
    <div className="return-input">
      {data.map((valu) => {
        return (
          <>
            <div key={valu.id} className="input-data_container">
              <div className="input-data">
                <div className="input-heading-data">
                  <h3>{valu.name}</h3>
                  <h6
                    className="date"
                    value={addDate}
                    onChange={changeDateHandler}
                  >
                    {valu.today}:
                  </h6>
                </div>
                <div className="input-btn">
                  <button
                    onClick={() => {
                      editItem(valu.id);
                    }}
                  >
                    <EditIcon />
                  </button>
                  <button
                    onClick={() => {
                      deleteItem(valu.id);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default AppComponent;
