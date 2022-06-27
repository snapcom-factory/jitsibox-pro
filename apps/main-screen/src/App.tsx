import React, { useRef, useState } from "react"
import "./App.css"
import { IFrame } from "./iframe"

function App(): React.ReactElement {
  const iFrameRef = useRef(null)

  return <IFrame></IFrame>
}

export default App
