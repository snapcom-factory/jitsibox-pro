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
          size="large"
          label={meetingLink}
          sx={{
            backgroundColor: "primary_light.main",
            color: "primary.main",
            paddingLeft: 1,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            textOverflow: "ellipsis",
            maxWidth: "45vw",
          }}
        />
        <Chip
          size="large"
          color="primary"
          sx={{
            paddingLeft: 1,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          icon={<QrCode />}
        />
      </ButtonBase>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 6 },
        }}
      >
        <IconButton
          size="large"
          sx={{
            alignSelf: "flex-end",
            marginTop: 2,
            mx: 2,
            marginBottom: 0,
            padding: 0,
          }}
          onClick={() => setOpen(false)}
        >
          <Close fontSize="inherit" />
        </IconButton>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ paddingBottom: 6 }}
        >
          <Typography variant="body2">Lien de la réunion</Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{ wordBreak: "break-all", px: 12 }}
          >
            {meetingLink}
          </Typography>
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
