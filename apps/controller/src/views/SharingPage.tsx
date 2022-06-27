import { useState } from "react"
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

const SharingPage = () => {
  const [isSharing, setIsSharing] = useState<boolean>(true)
  useSocketListener(socketEvents.localSharing.start, () => {
    setIsSharing(true)
  })
  useSocketListener(socketEvents.localSharing.stop, () => {
    setIsSharing(false)
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
          paddingBottom: 6,
        }}
      >
        <Grid container spacing={8}>
          {!isSharing ? (
            <Grid item xs={7}>
              <Typography variant="h3">
                Pour partager votre écran sur la télévision, brancher le cable
                HDMI à votre ordinateur.
              </Typography>
            </Grid>
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
                  Pour cesser le partage d&apos;écran, appuyer sur le bouton ou
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
