import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, changeTaskStatus, deleteTask, openModal, closeModal, updateTask, setTasks } from "./actions";
import Container from "./components/Container";
import Empty from "./components/Empty";
import Tasks from "./components/Tasks";
import { MdAdd } from "react-icons/md";
import { HiOutlineViewList } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { getTasks, postTasks } from "./requests/taks";

const App = () => {
  const dispatch = useDispatch();
  const pendingTasks = useSelector((state) => state.task.filter((tsk) => tsk.status === "PENDING"));
  const processTasks = useSelector((state) => state.task.filter((tsk) => tsk.status === "IN_PROCESS"));
  const doneTasks = useSelector((state) => state.task.filter((tsk) => tsk.status === "DONE"));
  const modal = useSelector((state) => state.modal);

  const handleAdd = async (event) => {
    if (event.key === "Enter") {
      const value = event.target.value;
      if (value) {
        dispatch(addTask(value));
        event.target.value = "";
      }
    }
  };

  const handleCloseModal = () => dispatch(closeModal());

  const handleUpdateTask = (task) => (event) => {
    if (event.key === "Enter") {
      task.name = event.target.value;
      dispatch(updateTask());
      handleCloseModal();
    }
  };

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    try {
      const res = await getTasks();
      dispatch(setTasks(res));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(pendingTasks);

  return (
    <React.Fragment>
      <Container>
        <header>
          <h1>
            My Activities <p>Wednesday, June 1</p>
          </h1>
          <HiOutlineViewList className="icon_sup" />
        </header>
        <main>
          {pendingTasks.length === 0 && processTasks.length === 0 && doneTasks.length === 0 ? (
            <Empty />
          ) : (
            <Tasks pendingTasks={pendingTasks} processTasks={processTasks} doneTasks={doneTasks} />
          )}
        </main>
        <footer>
          <MdAdd className="icon_float" />
          <input onKeyUp={handleAdd} />
        </footer>
      </Container>
      {modal.open && (
        <div className="base__modal">
          <div className="modal">
            <div className="modal__container">
              <header className="modal__container-header">
                <p>Opciones</p>
                <CgClose className="icon_sup" onClick={handleCloseModal} />
              </header>
              <div className="modal__container-main">
                <textarea autoFocus onKeyUp={handleUpdateTask(modal.data)} defaultValue={modal.data.name} rows={10} />
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
