import { useEffect, useState } from "react"
import { Typography, Stack, Grid } from "@mui/material"
import { Close } from "@mui/icons-material"
import { socketEvents } from "@jitsi-box-pro/model"
import {
  ViewContainer,
  Header,
  Footer,
  ActionButton,
  ReturnToMenuButton,
} from "@/components"
import { useSocketListener } from "@/services/socket"
import hdmiImageURL from "@/assets/hdmi.png"
import { useSnackbarContext } from "@/services/snackbar"

interface SharingProps {
  isPlugged: boolean
}

const SharingPage = ({ isPlugged } : SharingProps) => {
  const [isSharing, setIsSharing] = useState<boolean>(false);
  useEffect(() => setIsSharing(isPlugged), [isPlugged]);

  const { openSnackbar } = useSnackbarContext()
  useSocketListener(socketEvents.localSharing.start, () => {
    setIsSharing(true)
    openSnackbar(
      "success",
      { vertical: "bottom", horizontal: "center" },
      "Écran partagé",
      5000
    )
  })
  useSocketListener(socketEvents.localSharing.stop, () => {
    setIsSharing(false)
    openSnackbar(
      "warning",
      { vertical: "bottom", horizontal: "center" },
      "Câble HDMI débranché",
      5000
    )
  })

  return (
    <ViewContainer
      header={<Header endContent={<ReturnToMenuButton />} />}
      footer={<Footer />}
    >
      <Stack
        direction="column"
        justifyContent="center"
        sx={{
          height: "100%",
          mx: 8,
        }}
      >
        <Grid container spacing={8}>
          {!isSharing ? (
            <>
              <Grid item xs={7} sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h3">
                  Pour partager votre écran sur la télévision, brancher le câble
                  HDMI à votre ordinateur.
                </Typography>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={hdmiImageURL} alt="Câble HDMI" height={380} />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={9}>
                <Typography variant="h3">
                  Partage d&apos;écran activé.
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    paddingTop: 6,
                  }}
                >
                  Pour arrêter le partage d&apos;écran, appuyer sur le bouton ou
                  débrancher le câble.
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                <ActionButton
                  text="Arrêter le partage"
                  color="secondary"
                  Icon={Close}
                  event={{ name: socketEvents.global.cancel }}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Stack>
    </ViewContainer>
  )
}

export default SharingPage
