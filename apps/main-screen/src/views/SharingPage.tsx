import { useEffect, useRef, useState } from "react"
import { Typography, Stack } from "@mui/material"
import { ViewContainer } from "@/components"
import { getShareDevice } from "@/services/mediaDevices"

const SharingPage = () => {
  const [hasSource, setHasSource] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>(
    "Attente de connexion..."
  )
  const localVideo = useRef<HTMLVideoElement>(null)
  const handleDeviceChange = async () => {
    const sharingDevice = await getShareDevice()
    if (sharingDevice !== undefined) {
      const videoStream: MediaStream =
        await navigator.mediaDevices.getUserMedia({
          video: { advanced: [{ deviceId: sharingDevice.deviceId }] },
        })
      if (localVideo.current) {
        // TODO: remove VideoStream when leaving the page
        localVideo.current.srcObject = videoStream
      }
      setHasSource(true)
    } else {
      // This should happen only if the user does not use the Poly GC8 or the HDMI coverter to plug their computer OR if the  browser is not well configured
      setHasSource(false)
      setErrorMessage(
        "Erreur : impossible de partager votre écran. Veuillez vérifier que la tablette est bien branchée à l'unité centrale. \n Appeler un technicien si le problème persiste."
      )
    }
  }

  useEffect(() => {
    try {
      navigator.mediaDevices.ondevicechange = handleDeviceChange
    } catch (e) {
      // On Chrome, try to change the #unsafely-treat-insecure-origin-as-secure flag at chrome://flags
      setHasSource(false)
      setErrorMessage(
        "Problème de configuration du navigateur. \n Veuillez appeler un technicien."
      )
    }
    navigator.mediaDevices.getUserMedia({ video: true })
    handleDeviceChange()
  }, [navigator])

  return !hasSource ? (
    <ViewContainer>
      <Stack
        direction="column"
        justifyContent="center"
        sx={{
          height: "100%",
          mx: 8,
          paddingBottom: 6,
        }}
      >
        <Typography variant="h3" align="center">
          {errorMessage}
        </Typography>
      </Stack>
    </ViewContainer>
  ) : (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      ref={localVideo}
      autoPlay
      playsInline
      controls={false}
      style={{ height: "100vh", width: "100vw", objectFit: "fill" }}
    />
  )
}

export default SharingPage
