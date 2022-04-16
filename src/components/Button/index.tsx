import { useState } from "react";

type ButtonProps = {
  children?:string;
}

export function Button (props: ButtonProps) {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }
  
  return (
    <button onClick={increment}>{props.children || "default"} - {count}</button>
  )
}