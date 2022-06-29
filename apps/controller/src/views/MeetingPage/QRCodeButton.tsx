import { useEffect, useState } from "react"
import { useTheme } from "@mui/material/styles"
import {
  ButtonBase,
  Chip,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import { Close, QrCode } from "@mui/icons-material"
import QRCodeSVG from "qrcode-svg"

interface QRCodeButtonProps {
  meetingLink: string
}

const QRCodeButton = ({ meetingLink }: QRCodeButtonProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const theme = useTheme()
  const [qrCodeSvgString, setQrCodeSvgString] = useState<string>(
    new QRCodeSVG({
      content: meetingLink,
      height: 300,
      width: 300,
      background: theme.palette.background.paper,
      container: "svg",
    }).svg()
  )
  useEffect(() => {
    const newQrCodeSvg = new QRCodeSVG({
      content: meetingLink,
      height: 300,
      width: 300,
      background: theme.palette.background.paper,
      container: "svg",
    }).svg()
    setQrCodeSvgString(newQrCodeSvg)
  }, [meetingLink, theme.palette.background.paper])

  return (
    <>
      <ButtonBase
        onClick={() => {
          setOpen(true)
        }}
        sx={{ borderRadius: 20 }}
      >
        <Chip
          label={meetingLink}
          sx={{
            backgroundColor: "primary_light.main",
            color: "primary.main",
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
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        maxWidth="md"
        fullWidth
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ height: "100%", paddingBottom: 6, paddingTop: 1, px: 1 }}
        >
          <IconButton
            size="large"
            sx={{ alignSelf: "flex-end" }}
            onClick={() => {
              setOpen(false)
            }}
          >
            <Close fontSize="inherit" />
          </IconButton>
          <Typography variant="body2">Lien de la réunion</Typography>
          <Typography variant="h4">{meetingLink}</Typography>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: qrCodeSvgString }} />
          <Typography variant="body1">
            Scanner ce QR code pour rejoindre la réunion à partir d&apos;un
            autre appareil
          </Typography>
        </Stack>
      </Dialog>
    </>
  )
}
export default QRCodeButton
