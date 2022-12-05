import React from 'react'
import { useRoutes } from "react-router-dom";
import Homescreen from '../Homescreen';

const Allroutes = () => {
let elements = useRoutes([
  {
    path: "/",
    element: <Homescreen />,
  },
]);

  return (
    <div>{elements}</div>
  )
}

export default Allroutes