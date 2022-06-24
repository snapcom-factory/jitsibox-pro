import { useParams, useNavigate } from "react-router-dom"
import { Chip, Container, Stack, Typography } from "@mui/material"
import { CallEnd, Person } from "@mui/icons-material"
import { socketEvents } from "@jitsi-box-pro/model"

import { ViewContainer, MeetingButton, Header, Footer } from "@/components"
import { useSocketListener } from "@/services/socket"
import QRCodeButton from "@/views/MeetingPage/QRCodeButton"
import MeetingMainControls from "@/views/MeetingPage/MeetingMainControls"

const MeetingPage = () => {
  const { meetingId } = useParams()
  const navigate = useNavigate()
  useSocketListener(socketEvents.meeting.leave, () => {
    navigate("/")
  })

  return (
    <ViewContainer
      header={
        <Header
          middleContent={<QRCodeButton />}
          endContent={<Chip icon={<Person />} label="12" color="primary" />}
        />
      }
      footer={<Footer />}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{ paddingBottom: 10 }}
        >
          <Typography variant="h5">Identifiant de la réunion</Typography>
          <Typography variant="h3">{meetingId}</Typography>
        </Stack>
        <MeetingMainControls />
        <MeetingButton
          color="secondary"
          Icon={CallEnd}
          event={{ name: socketEvents.meeting.leave }}
          render
        />
      </Container>
    </ViewContainer>
  )
}
export default MeetingPage
