import { useState } from "react"
import Keyboard from "react-simple-keyboard"
import { Paper, useTheme } from "@mui/material"
import "react-simple-keyboard/build/css/index.css"
import "@/components/CustomKeyboard/CustomKeyboard.css"
import { useSnackbarContext } from "@/services/snackbar"

interface KeyboardProps {
  setValue: (value: string) => void
}

// A few constants
const alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
const defaultLayout: string[] = [
  "1 2 3 4 5 6 7 8 9 0 {bksp}",
  "a z e r t y u i o p",
  "q s d f g h j k l m",
  "{shift} w x c v b n {switchTo123}",
]
const defaultCapsLayout: string[] = [
  "1 2 3 4 5 6 7 8 9 0 {bksp}",
  "A Z E R T Y U I O P",
  "Q S D F G H J K L M",
  "{shift} W X C V B N {switchTo123}",
]
const numpadLayout: string[] = [
  "1 2 3",
  "4 5 6",
  "7 8 9",
  "{switchToABC} 0 {bksp}",
]

// TODO : This keyboard is a good MVP keyboard, but should be replaced for production.
/* Major defaults are :
- The library keyboard is not natively responsive : it does not automatically adjust itself to the size of its container. Its height and width styling have to be overriden.
- The keyboard does not handle well HTML Change Events
- The styling of this keyboard MUST BE done with CSS classnames that have to be added the theme props of this component. This does not play well with the CSS-in-JS solution used in the rest of the application. Moreover, to overcome the native CSS specificity of the library, !important tags have to be added to some of our CSS properties.
*/
const maxInputLength = 46

const CustomKeyboard = ({ setValue }: KeyboardProps): React.ReactElement => {
  const [currentLayout, setCurrentLayout] = useState<string>("numpad")

  const handleSpecialKeys = (button: string) => {
    if (button === "{switchToABC}") {
      setCurrentLayout("default")
    } else if (button === "{switchTo123}") {
      setCurrentLayout("numpad")
    } else if (button === "{shift}") {
      setCurrentLayout(currentLayout === "default" ? "defaultCaps" : "default")
    } else if (
      currentLayout === "defaultCaps" &&
      alphabet.toUpperCase().includes(button)
    ) {
      setCurrentLayout("default")
    }
  }
  const { openSnackbar } = useSnackbarContext()

  const handleChange = (input: string) => {
    setValue(input)
    if (input.length === maxInputLength) {
      openSnackbar(
        "warning",
        { vertical: "top", horizontal: "center" },
        "Limite de caractères atteinte",
        5000
      )
    }
  }
  const theme = useTheme()

  return (
    <Paper
      elevation={4}
      sx={{
        height: "53.1vh",
        width: "100vw",
        position: "fixed",
        bottom: "0",
        borderRadius: 0,
        backgroundColor: theme.palette.primary_lighter.main,
      }}
    >
      <Keyboard
        onChange={handleChange}
        maxLength={maxInputLength}
        disableCaretPositioning={false}
        onKeyPress={(button: string) => handleSpecialKeys(button)}
        layoutName={currentLayout}
        display={{
          "{bksp}": "⌫",
          "{shift}": "⇧",
          "{switchTo123}": "123",
          "{switchToABC}": "ABC",
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
                  class: "keyboard-classic-buttons buttons",
                  buttons: `${alphabet} ${alphabet.toUpperCase()} 0 1 2 3 4 5 6 7 8 9`,
                },
                {
                  class: "keyboard-long-buttons buttons",
                  buttons: "{shift} {switchTo123}",
                },
                {
                  class: "keyboard-bksp-button buttons",
                  buttons: "{bksp}",
                },
              ]
            : [
                {
                  class: "keyboard-numpad-buttons buttons",
                  buttons: "1 2 3 4 5 6 7 8 9 0 {bksp} {switchToABC}",
                },
              ]
        }
      />
    </Paper>
  )
}

export default CustomKeyboard
