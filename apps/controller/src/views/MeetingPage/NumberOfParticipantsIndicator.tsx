import { Person } from "@mui/icons-material"
import { Chip } from "@mui/material"

const NumberOfParticipantsIndicator = () => (
  <Chip
    icon={<Person color="inherit" />}
    label="12"
    color="primary"
    sx={{
      color: "primary.main",
      backgroundColor: "primary_lighter.main",
    }}
  />
)

export default NumberOfParticipantsIndicator
