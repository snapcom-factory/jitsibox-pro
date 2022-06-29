import { useContext } from "react"
import SnackbarContext, {
  SnackbarContextType,
} from "@/services/snackbar/snackbarContext"

const useSnackbarContext = () => {
  const snackbarCtx = useContext<SnackbarContextType | undefined>(
    SnackbarContext
  )
  if (snackbarCtx === undefined) {
    throw new Error("No SnackbarProvider was provided")
  }
  return snackbarCtx
}

export default useSnackbarContext
