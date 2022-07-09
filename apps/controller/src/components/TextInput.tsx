import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ArrowForward, CloseRounded, CheckRounded } from "@mui/icons-material"
import {
  Box,
  IconButton,
  InputBase,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material"
import { socketEvents } from "@jitsi-box-pro/model"
import { useSocketContext, useSocketListener } from "@/services/socket"
import { CustomKeyboard } from "@/components"
import { useSnackbarContext } from "@/services/snackbar"
import { Location, TextInputState } from "@/services/navigate"

type AllowedEvents =
  | `${typeof socketEvents.joinCall.validate}`
  | `${typeof socketEvents.createCall.validate}`
interface TextInputProps {
  eventName: AllowedEvents
  placeholder: string
  namesOnly?: boolean
}

const TextInput = ({
  eventName,
  placeholder,
  namesOnly = false,
}: TextInputProps): React.ReactElement => {
  const { state } = useLocation() as Location<TextInputState>

  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => setLoading(state?.isLoading ?? false), [state])

  useSocketListener(socketEvents.joinCall.error, () => setLoading(false))
  useSocketListener(socketEvents.createCall.error, () => setLoading(false))

  const { socket } = useSocketContext()
  const { openSnackbar } = useSnackbarContext()
  const [input, setInput] = useState<string>("")

  const hasThreeDigits =
    input.split("").filter((elt) => "1234567890".includes(elt)).length >= 3
  const hasTenCharacters = input.length >= 10

  const handleInputChange = (): void => {
    openSnackbar(
      "warning",
      { vertical: "top", horizontal: "center" },
      "Veuillez utiliser le clavier virtuel",
      3000
    )
  }

  const handleSubmit = () => {
    if (
      socket !== null &&
      (!namesOnly || (hasTenCharacters && hasThreeDigits))
    ) {
      setLoading(true)
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
          {loading ? <CircularProgress /> : <ArrowForward />}
        </IconButton>
        {namesOnly && input.length > 0 ? (
          <div
            style={{
              paddingTop: "2vh",
            }}
          >
            <Stack
              sx={{ color: hasTenCharacters ? "success.main" : "error.main" }}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {hasTenCharacters ? <CheckRounded /> : <CloseRounded />}
              <Typography variant="body1" style={{ paddingBottom: "0.5vh" }}>
                &nbsp; Au moins 10 caractères
              </Typography>
            </Stack>
            <Stack
              sx={{ color: hasThreeDigits ? "success.main" : "error.main" }}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {hasThreeDigits ? <CheckRounded /> : <CloseRounded />}
              <Typography variant="body1" sx={{ paddingBottom: "0.5vh" }}>
                &nbsp; Au moins 3 chiffres
              </Typography>
            </Stack>
          </div>
        ) : null}
      </Box>
      <CustomKeyboard
        setValue={setInput}
        namesOnly={namesOnly}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default TextInput
