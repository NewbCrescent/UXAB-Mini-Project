import { useState, useMemo } from 'react'
import { X } from "lucide-react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card, {type CardProps} from "./Components/Card.tsx";
import InputLabel from "./Components/InputLabel.tsx";
import './App.css'

type Card = {
  ID: number
  DueDate: string;
  Description: string;
  Title: string;
  Difficulty: number;
}

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [totalTodos, setTotalTodos] = useState<(Card | CardProps)[]>([]);
  const [currentID, setCurrentID] = useState(0);

  const sortedTodosDate = useMemo(() => {
    return totalTodos.sort((a, b) => {
      return new Date(a.DueDate).getTime() - new Date(b.DueDate).getTime();
    });
  }, [totalTodos]);


  return (
      <section className={"h-svh"}>
        <section className={"mx-auto bg-amber-200 p-8 rounded-xl h-5/6"}>
          <h1 className={"text-black"}><span className={"font-bold"}>TODO</span> Student Assignment Planner</h1>
          <div className={"text-black grid grid-cols-4 my-2"}>
            <InputLabel title={"Title"}>
              <input type={"text"}
                     placeholder={"Math HW 3"}
                     value={title}
                     onChange={((e) => setTitle(e.target.value))}
                     className={"text-center"}
              />
            </InputLabel>
            <InputLabel title={"Description"}>
              <input type={"text"}
                     placeholder={"#3 - #21"}
                     onChange={(e) => setDescription(e.target.value)}
                     value={description}
                     className={"text-center"}
              />
            </InputLabel>
            <InputLabel title={"Due Date"}>
              <input type={"date"}
                     onChange={(e) => setDueDate(e.target.value)}
                     value={dueDate}
                     className={"text-center"}
              />
            </InputLabel>
            <InputLabel title={"Difficulty"}>
              <input type={"number"}
                     min={1}
                     max={10}
                     onChange={(e) => setDifficulty(parseInt(e.target.value))}
                     value={difficulty}
                     className={"mx-2"}
              />
            </InputLabel>
          </div>
          <button onClick={() => {
              setTotalTodos((prev) => [...prev, {ID: currentID ,Title: title, Description: description, DueDate: dueDate, Difficulty: difficulty}]);
              setTitle("");
              setDescription("");
              setDueDate("");
              setDifficulty(1);
              setCurrentID(prev => prev + 1);
            }}
                    className={"!bg-white text-black my-2"}
            >Add
          </button>
          <div className={"overflow-y-auto h-2/3 bg-black rounded-xl px-2"}>
            {sortedTodosDate.map((item) => (
                <Card Title={item.Title}
                      Description={item.Description}
                      DueDate={item.DueDate}
                      Difficulty={item.Difficulty}
                      key={item.ID}
                      setArray={setTotalTodos}
                      ID={item.ID}
                />
            ))}
          </div>
        </section>
      </section>
  )
}

export default App
