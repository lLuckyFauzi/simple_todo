import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([
    {
      id: 1,
      notes: "Beli Makan",
    },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newNotes = [
      {
        id: Math.random(),
        notes: inputValue,
      },
      ...notes,
    ];

    setNotes(newNotes);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Todolist</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Add your task..."
            onChange={function (e) {
              setInputValue(e.target.value);
            }}
          />
          <button>Add</button>
        </form>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <h1>Your Task</h1>
          {notes.map((item) => {
            return (
              <ul key={item.id}>
                <li
                  style={{
                    listStyle: "none",
                  }}
                >
                  {item.notes}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
