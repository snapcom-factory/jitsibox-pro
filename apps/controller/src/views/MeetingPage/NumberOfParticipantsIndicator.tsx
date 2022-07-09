import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Person } from "@mui/icons-material"
import { Chip } from "@mui/material"
import { socketEvents } from "@jitsi-box-pro/model"
import { Location, MeetingState } from "@/services/navigate"
import { useSocketListener } from "@/services/socket"

const NumberOfParticipantsIndicator = () => {
  const { state } = useLocation() as Location<MeetingState>
  const newNumberOfParticipants = state?.numberOfParticipants

  const [numberOfParticipants, setNumberOfParticipants] = useState<
    number | undefined
  >(undefined)

  useEffect(() => {
    setNumberOfParticipants(newNumberOfParticipants)
  }, [state])

  useSocketListener(
    socketEvents.meeting.participants,
    (updatedNumberOfParticipants: number) => {
      setNumberOfParticipants(updatedNumberOfParticipants)
    }
  )
  return (
    <Chip
      size="large"
      icon={<Person color="inherit" />}
      label={numberOfParticipants}
      color="primary"
      sx={{
        color: "primary.main",
        backgroundColor: "primary_lighter.main",
      }}
    />
  )
}

export default NumberOfParticipantsIndicator
