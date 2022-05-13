import React, { useState, useEffect } from "react";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AppComponent from "./AppComponent";
import EditIcon from "@mui/icons-material/Edit";

const getItem = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [task, setTaks] = useState("");
  const [data, setData] = useState(getItem());
  const [toggleData, setToggleData] = useState(true);
  const [editText, setEditText] = useState(null);
  const [addDate, setAddDate] = useState("");

  const changeHendler = (e) => {
    setTaks(e.target.value);
    console.log(task);
  };

  const changeDateHandler = (e) => {
    setAddDate(e.target.value);
    console.log(addDate);
  };

  ////////////////////////////////

  const date = new Date();
  const fullTime =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const dateTime = fullTime + " " + time;
  console.log(dateTime);

  ///////////////////////////////////

  const submitHandler = (a) => {
    a.preventDefault();
    if (task.trim().length < 1) {
      alert("please add value");
    } else if (task && !toggleData) {
      setData(
        data.map((e) => {
          if (e.id === editText) {
            return { ...e, name: task };
          }
          return e;
        })
      );
      setToggleData(true);
      setTaks("");
      setEditText(null);
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        name: task,
        today: dateTime,
      };
      setData([...data, newData]);
      setTaks("");
    }
  };

  ////////////////////////////////////////

  const deleteItem = (a) => {
    if (!toggleData) {
      alert("First Edit your item");
    } else {
      const finalData = data.filter((value) => {
        return a !== value.id;
      });
      setData(finalData);
      setTaks("");
    }
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(data));
  }, [data]);

  //////////////////////////////////////

  const editItem = (id) => {
    let findItem = data.find((e) => {
      return e.id === id;
    });
    setTaks(findItem.name);
    setAddDate(findItem.today);
    setEditText(id);
    setToggleData(false);
  };

  return (
    <>
      <div className="main">
        <div className="main-container">
          <div className="container">
            <div className="container_item">
              <h1>
                add your list here <FeaturedPlayListIcon />
              </h1>
              <div className="form-container">
                <form onSubmit={submitHandler}>
                  <input
                    className="input input-item"
                    type="text"
                    placeholder="add item"
                    value={task}
                    onChange={changeHendler}
                  />

                  {toggleData ? (
                    <button className="btn">
                      <AddIcon
                        fontSize="large"
                        color="primary"
                        aria-label="add"
                      />
                    </button>
                  ) : (
                    <button className="btn">
                      <EditIcon
                        fontSize="large"
                        color="primary"
                        aria-label="add"
                      />
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
          <AppComponent
            data={data}
            addDate={addDate}
            changeDateHandler={changeDateHandler}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        </div>
      </div>
    </>
  );
}

export default App;
