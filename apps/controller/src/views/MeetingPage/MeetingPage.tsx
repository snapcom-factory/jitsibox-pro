import { useParams } from "react-router-dom"
import { socketEvents } from "@jitsi-box-pro/model"
import { Container, Stack, Typography } from "@mui/material"
import { CallEnd } from "@mui/icons-material"
import useCustomNavigate from "@/services/useCustomNavigate"
import { ViewContainer, ActionButton, Header, Footer } from "@/components"
import { useSocketListener } from "@/services/socket"
import QRCodeButton from "@/views/MeetingPage/QRCodeButton"
import NumberOfParticipantsIndicator from "@/views/MeetingPage/NumberOfParticipantsIndicator"
import MeetingMainControls from "@/views/MeetingPage/MeetingMainControls"

const MeetingPage = () => {
  const { meetingId } = useParams()
  const navigate = useCustomNavigate()
  useSocketListener(socketEvents.meeting.leave, () => {
    navigate("/")
  })

  return (
    <ViewContainer
      header={
        <Header
          middleContent={
            <QRCodeButton meetingLink="webconf.numerique.gouv.fr/tuweruywe345" />
          }
          endContent={<NumberOfParticipantsIndicator />}
        />
      }
      footer={<Footer />}
    >
      <Container
        maxWidth="tablet"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          paddingBottom: 1.5,
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ paddingBottom: 4 }}
        >
          <Typography variant="body2">Identifiant de la réunion</Typography>
          <Typography variant="h2">{meetingId}</Typography>
        </Stack>
        <MeetingMainControls />
        <ActionButton
          color="secondary"
          Icon={CallEnd}
          event={{ name: socketEvents.meeting.leave }}
        />
      </Container>
    </ViewContainer>
  )
}
export default MeetingPage
