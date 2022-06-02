import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toCompleteTask } from "./actions";
import { Container } from "./Components";
import { BsCheckCircleFill } from "react-icons/bs";
import { ImRadioUnchecked } from "react-icons/im";
import { AiFillCaretDown } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { HiOutlineViewList } from "react-icons/hi";

const App = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.task);

  const incompleted = list.filter((tsk) => !tsk.success);
  const completed = list.filter((tsk) => tsk.success);

  const handleAdd = (event) => {
    if (event.key === "Enter") {
      const value = event.target.value;
      if (value) {
        dispatch(addTask(value));
        event.target.value = "";
      }
    }
  };

  const handleChangeStatus = (task) => () => {
    task.success = !task.success;
    dispatch(toCompleteTask());
  };

  return (
    <Container>
      <header>
        <h1>
          My Activities <p>Wednesday, June 1</p>
        </h1>
        <HiOutlineViewList className="icon_sup" />
      </header>
      <main>
        {incompleted.length === 0 && completed.length === 0 ? (
          <section className="empty">
            <article className="empty__box">
              <img src="../static/images/empty.jpg" />
              <h6>Focus on your day</h6>
              <p>Get things done with my day, a list that refreshes every day.</p>
            </article>
          </section>
        ) : (
          <section>
            <article className="list">
              {incompleted.map((item, index) => (
                <div className="list__item" key={index}>
                  <ImRadioUnchecked className="icon" onClick={handleChangeStatus(item)} />
                  <h6>{item.task}</h6>
                </div>
              ))}
            </article>
            {completed.length > 0 ? (
              <article className="list">
                <p className="list__item">
                  <AiFillCaretDown /> Completed {completed.length}
                </p>
                {completed.map((item, index) => (
                  <div className="list__item" key={index}>
                    <BsCheckCircleFill className="icon" onClick={handleChangeStatus(item)} />
                    <h6 className="completed">{item.task}</h6>
                  </div>
                ))}
              </article>
            ) : null}
          </section>
        )}
      </main>
      <footer>
        <MdAdd className="icon_float" />
        <input onKeyUp={handleAdd} />
      </footer>
    </Container>
  );
};

export default App;
