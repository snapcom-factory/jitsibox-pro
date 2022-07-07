import { useState } from "react"
import Keyboard from "react-simple-keyboard"
import { Paper, useTheme } from "@mui/material"
import "react-simple-keyboard/build/css/index.css"
import "@/components/CustomKeyboard/CustomKeyboard.css"
import { useSnackbarContext } from "@/services/snackbar"
import {
  alphabet,
  getKeyboardLayout,
} from "@/components/CustomKeyboard/CustomLayouts"

interface KeyboardProps {
  setValue: (value: string) => void
  creating: boolean
  handleSubmit: () => void
}

// TODO : This keyboard is a good MVP keyboard, but should be replaced for production.
/* Major defaults are :
- The library keyboard is not natively responsive : it does not automatically adjust itself to the size of its container. Its height and width styling have to be overriden.
- The keyboard does not handle well HTML Change Events
- The styling of this keyboard MUST BE done with CSS classnames that have to be added the theme props of this component. This does not play well with the CSS-in-JS solution used in the rest of the application. Moreover, to overcome the native CSS specificity of the library, !important tags have to be added to some of our CSS properties.
*/
const maxInputLength = 46

const CustomKeyboard = ({
  setValue,
  creating,
  handleSubmit,
}: KeyboardProps): React.ReactElement => {
  const [numpad, setNumpad] = useState<boolean>(!creating);
  const [caps, setCaps] = useState<boolean>(!creating);

  const handleSpecialKeys = (button: string) => {
    switch (button) {
      case "{switchToABC}":
        setNumpad(false)
        break;
      case "{switchTo123}":
        setNumpad(true)
        break;
      case "{enter}":
        handleSubmit()
        break;
      case "{shift}":
        setCaps((value) => !value)
        break;
      default:
        if (caps && alphabet.toUpperCase().includes(button)) {
          setCaps(false)
        }
    }
  }
  const { openSnackbar } = useSnackbarContext()

  const handleChange = (input: string) => {
    setValue(input)
    if (input.length === 0) setCaps(true)
    if (input.length === maxInputLength) {
      openSnackbar(
        "warning",
        { vertical: "top", horizontal: "center" },
        "Limite de caractères atteinte",
        3000
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
        layoutName="default"
        display={{
          "{bksp}": "⌫",
          "{shift}": "⇧",
          "{switchTo123}": "123",
          "{switchToABC}": "ABC",
          "{enter}": "Valider",
        }}
        layout={{
          default: getKeyboardLayout(creating, numpad, caps)
        }}
        theme={`hg-theme-default keyboard ${
          numpad ? "numpad" : ""
        }`}
        buttonTheme={
          !numpad
            ? [
                {
                  class: "keyboard-classic-buttons buttons",
                  buttons: `${alphabet} ${alphabet.toUpperCase()} 0 1 2 3 4 5 6 7 8 9`,
                },
                {
                  class: "keyboard-long-buttons buttons",
                  buttons: "{shift} {switchTo123} {enter}",
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
