import {useEffect, useState} from "react";

const Textos = ({ soluciones }) => {
  const [state, setstate] = useState("")
useEffect(() => {
  setstate(window.location.pathname)
}, [])

return(
  <div className="hidden md:block col-span-3 lg:col-span-4 xl:col-span-3 sticky top-64 ">
    <ul className=" space-y-6 ">
      {soluciones.map((name) => (
        <li className={state == "/procedimientos/" +name.id ? "text-blue-600" : "text-gray-700"}>
          <a href={"/procedimientos/" +name.id}>{name.name}</a>
        </li>
      ))}
    </ul>
  </div>)
};

export default Textos;
