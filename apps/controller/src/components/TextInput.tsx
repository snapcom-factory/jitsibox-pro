import { useEffect, useState } from "react"
import { ArrowForward, CloseRounded, CheckRounded } from "@mui/icons-material"
import { Box, IconButton, InputBase, Stack } from "@mui/material"
import { socketEvents } from "@jitsi-box-pro/model"
import { useSocketContext } from "@/services/socket"
import { CustomKeyboard } from "@/components"
import { useSnackbarContext } from "@/services/snackbar"

type AllowedEvents =
  | `${typeof socketEvents.joinCall.validate}`
  | `${typeof socketEvents.createCall.validate}`

interface TextInputProps {
  eventName: AllowedEvents
  placeholder: string
  creating?: boolean
}

const TextInput = ({
  eventName,
  placeholder,
  creating = false,
}: TextInputProps): React.ReactElement => {
  const { socket } = useSocketContext()
  const { openSnackbar } = useSnackbarContext()
  const [input, setInput] = useState<string>("")

  const [hasThreeDigits, setHasThreeDigits] = useState<boolean>(false)
  const [hasTenCharacters, setHasTenCharacters] = useState<boolean>(false)

  if (creating) {
    useEffect(() => {
      setHasThreeDigits(
        input.split("").filter((elt) => "1234567890".includes(elt)).length >= 3
      )
      setHasTenCharacters(input.length >= 10)
    }, [input])
  }

  const handleInputChange = (): void => {
    openSnackbar(
      "warning",
      { vertical: "top", horizontal: "center" },
      "Veuillez utiliser le clavier virtuel",
      5000
    )
  }

  const handleSubmit = () => {
    if (socket !== null && (!creating || (hasTenCharacters && hasThreeDigits))) {
      socket.emit(eventName, input)
    }
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gridTemplateRows: "1fr",
          alignItems: "center",
          width: 650,
        }}
      >
        <InputBase
          value={input}
          onChange={handleInputChange}
          placeholder={placeholder}
          inputProps={{ maxLength: 46 }}
          sx={{
            gridColumn: "1 / 3",
            gridRow: "1 / 2",
            height: 40,
            paddingLeft: 3,
            paddingRight: 8,
            borderRadius: 20,
            backgroundColor: "primary_lighter.main",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "primary_light.main",
          }}
        />
        <IconButton
          color="primary"
          sx={{
            gridColumn: "2 / 3",
            gridRow: "1 / 2",
            zIndex: 1,
            height: 55,
            width: 55,
            backgroundColor: "primary_light.main",
            ":hover": {
              backgroundColor: "primary_lighter.main",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "primary_light.main",
            },
          }}
          onClick={handleSubmit}
        >
          <ArrowForward />
        </IconButton>
        {creating ? (
          <div
            style={{
              paddingTop: "2vh"
            }}
          >
            <Stack
              sx = {{ color: hasTenCharacters ? "green" : "red" }}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {hasTenCharacters ? <CheckRounded /> : <CloseRounded />}
              <div style={{ paddingBottom: "0.5vh" }}>
                &nbsp; Au moins 10 caractères
              </div>
            </Stack>
            <Stack
              sx = {{ color: hasThreeDigits ? "green" : "red"}}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {hasThreeDigits ? <CheckRounded /> : <CloseRounded />}
              <div style={{ paddingBottom: "0.5vh" }}>
                &nbsp; Au moins 3 chiffres
              </div>
            </Stack>
          </div>
        ) : null}
      </Box>
      <CustomKeyboard
        setValue={setInput}
        creating={creating}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default TextInput
