import { QrCode } from "@mui/icons-material"
import { ButtonBase, Chip } from "@mui/material"

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
export default QRCodeButton
