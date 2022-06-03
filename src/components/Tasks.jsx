import { BsCheckCircleFill } from "react-icons/bs";
import { ImRadioUnchecked } from "react-icons/im";
import { AiFillCaretDown, AiTwotoneDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addTask, changeTaskStatus, deleteTask, openModal, closeModal, updateTask } from "../actions";

const Tasks = ({ pendingTasks, processTasks, doneTasks }) => {
  const list = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleChangeStatus = (task) => () => {
    task.success = !task.success;
    dispatch(changeTaskStatus());
  };

  const handleDeleteTask = (task) => () => {
    const finder = list.findIndex((row) => row.task === task.task && row.success === task.success);
    list.splice(finder, 1);
    dispatch(deleteTask());
  };

  const handleOpenModal = (task) => () => {
    const finder = list.findIndex((row) => row.task === task.task && row.success === task.success);
    const toSend = list[finder];
    dispatch(openModal(toSend));
  };

  return (
    <section>
      <article className="list">
        {pendingTasks.map((item, index) => (
          <div className="list__item" key={index}>
            <ImRadioUnchecked className="icon" onClick={handleChangeStatus(item)} />
            <h6 onClick={handleOpenModal(item)}>{item.name}</h6>
            <AiTwotoneDelete className="icon" onClick={handleDeleteTask(item)} />
          </div>
        ))}
      </article>
      {processTasks.length > 0 ? (
        <article className="list">
          <p className="list__item">
            <AiFillCaretDown /> In proccess {processTasks.length}
          </p>
          {processTasks.map((item, index) => (
            <div className="list__item" key={index}>
              <BsCheckCircleFill className="icon" onClick={handleChangeStatus(item)} />
              <h6 className="completed">{item.name}</h6>
              <AiTwotoneDelete className="icon" onClick={handleDeleteTask(item)} />
            </div>
          ))}
        </article>
      ) : null}
      {doneTasks.length > 0 ? (
        <article className="list">
          <p className="list__item">
            <AiFillCaretDown /> Completed {doneTasks.length}
          </p>
          {doneTasks.map((item, index) => (
            <div className="list__item" key={index}>
              <BsCheckCircleFill className="icon" onClick={handleChangeStatus(item)} />
              <h6 className="completed">{item.name}</h6>
              <AiTwotoneDelete className="icon" onClick={handleDeleteTask(item)} />
            </div>
          ))}
        </article>
      ) : null}
    </section>
  );
};

export default Tasks;
