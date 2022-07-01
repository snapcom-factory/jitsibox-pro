import { useState } from "react"
import Keyboard from "react-simple-keyboard"
import { Box } from "@mui/material"
import "react-simple-keyboard/build/css/index.css"
import "@/components/CustomKeyboard/CustomKeyboard.css"

interface KeyboardProps {
  setValue: (value: string) => void
}

// A few constants
const alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
const defaultLayout: string[] = [
  "1 2 3 4 5 6 7 8 9 0 {bksp}",
  "a z e r t y u i o p {enter}",
  "q s d f g h j k l m _",
  "{shift} w x c v b n - {switch}",
]
const defaultCapsLayout: string[] = [
  "1 2 3 4 5 6 7 8 9 0 {bksp}",
  "A Z E R T Y U I O P {enter}",
  "Q S D F G H J K L M _",
  "{shift} W X C V B N - {switch}",
]
const numpadLayout: string[] = ["1 2 3", "4 5 6", "7 8 9", "{switch} 0 {bksp}"]

const CustomKeyboard = ({ setValue }: KeyboardProps): React.ReactElement => {
  const [currentLayout, setCurrentLayout] = useState<string>("numpad")

  const handleSpecialKeys = (button: string) => {
    if (button === "{switch}") {
      setCurrentLayout(currentLayout.includes("default") ? "numpad" : "default")
    } else if (button === "{shift}") {
      setCurrentLayout(currentLayout === "default" ? "defaultCaps" : "default")
    } else if (
      currentLayout === "defaultCaps" &&
      alphabet.toUpperCase().includes(button)
    ) {
      setCurrentLayout("default")
    }
  }

  return (
    <Box
      sx={{
        zIndex: "10000",
        width: "100vw",
        backgroundColor: "#EBEBEB",
        position: "absolute",
        bottom: "0",
        height: "53.1vh",
      }}
    >
      <Keyboard
        onChange={(input) => setValue(input)}
        onKeyPress={(button: string) => handleSpecialKeys(button)}
        layoutName={currentLayout}
        display={{
          "{bksp}": "⌫",
          "{shift}": "⇧",
          "{switch}": "123 ⇄ ABC",
          "{enter}": "⇨",
        }}
        layout={{
          default: defaultLayout,
          defaultCaps: defaultCapsLayout,
          numpad: numpadLayout,
        }}
        theme={`hg-theme-default keyboard ${
          currentLayout === "numpad" ? "numpad" : ""
        }`}
        buttonTheme={
          currentLayout !== "numpad"
            ? [
                {
                  class: "keyboard-classic-buttons",
                  buttons: `${alphabet} ${alphabet.toUpperCase()} 0 1 2 3 4 5 6 7 8 9 _ - {bksp} {enter}`,
                },
                {
                  class: "keyboard-long-buttons",
                  buttons: "{shift} {switch}",
                },
              ]
            : [
                {
                  class: "keyboard-numpad-buttons",
                  buttons: "1 2 3 4 5 6 7 8 9 0 {bksp} {switch}",
                },
              ]
        }
      />
    </Box>
  )
}

export default CustomKeyboard
