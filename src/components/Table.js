const Table = ({ taskList }) => {
  const doneTasks = taskList.filter((doneTask, index) => {
    return doneTask.isCheck;
  });
  const notDoneTasks = taskList.filter((doneTask, index) => {
    return doneTask.isCheck === false;
  });

  return (
    <section>
      <div className="wrapper">
        <div>
          <h2 className="done">DONE</h2>
          <div>
            {doneTasks &&
              doneTasks.map((doneTask, idx) => {
                return <p key={idx}>{doneTask.name}</p>;
              })}
          </div>
        </div>
        <div>
          <h2 className="not-done">NOT DONE</h2>
          <div>
            {notDoneTasks &&
              notDoneTasks.map((notDoneTask, idx) => {
                return <p key={idx}>{notDoneTask.name}</p>;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
