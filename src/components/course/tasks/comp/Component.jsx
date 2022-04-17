import { useState } from "react";
import { Arr } from "./Arr";
import { NewTasks } from "./NewTasks";
import { Num } from "./Num";
import { Obj } from "./Obj";

export const Component = () => {
  const [num, setNum] = useState(1);
  const [str, setStr] = useState("Hallo");
  const [obj, setObj] = useState({ name: "Elisa", title: 'Student' });
  const [arr, setArray] = useState(['Edward ', 'Gael ']);
  const [tasks, setTasks]= useState([
    {id:"1", title:"learn"},
    {id:"2", title:"read"},
  ])

  const onClick = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <Num st={str} number={num} />
      <button onClick={onClick}>+</button>
      <Obj obj={obj} />
      <Arr arr={arr} />
      <NewTasks tasks={tasks} />
    </div>
  );
};
