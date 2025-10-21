//import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/Root";
import "./App.css";

export default function App() {

  const router=createBrowserRouter(
      [
          {path: "*", Component:Root}
      ]
  );
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

