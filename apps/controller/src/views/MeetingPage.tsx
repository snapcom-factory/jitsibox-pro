import { useParams } from "react-router-dom"
import {
  ButtonBase,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import {
  CallEnd,
  Person,
  Mic,
  Videocam,
  PresentToAll,
  QrCode,
} from "@mui/icons-material"
import WaveHand from "@/assets/WaveHand"
import { ViewContainer, MeetingButton, Header, Footer } from "@/components"

const QRCodeButton = () => (
  <ButtonBase sx={{ borderRadius: 20 }}>
    <Chip
      label="webconf.numerique.gouv.fr/tuweruywe345"
      color="primary"
      variant="outlined"
      sx={{
        height: 30,
        paddingLeft: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }}
    />
    <Chip
      color="primary"
      sx={{
        height: 30,
        paddingLeft: 1,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
      }}
      icon={<QrCode />}
    />
  </ButtonBase>
)

const MeetingPage = () => {
  const { meetingId } = useParams()
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
        <Grid container spacing={8} justifyContent="center" alignItems="center">
          <Grid item xs={3}>
            <MeetingButton color="primary" Icon={Mic} />
          </Grid>
          <Grid item xs={3}>
            <MeetingButton color="primary" Icon={Videocam} />
          </Grid>
          <Grid item xs={3}>
            <MeetingButton color="primary" Icon={WaveHand} />
          </Grid>
          <Grid item xs={3}>
            <MeetingButton color="primary" Icon={PresentToAll} />
          </Grid>
        </Grid>
        <MeetingButton color="secondary" Icon={CallEnd} />
      </Container>
    </ViewContainer>
  )
}
export default MeetingPage
