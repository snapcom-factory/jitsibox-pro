import { useNavigate } from "react-router-dom"
import { NavigateState } from "@/services/navigate"

export type CustomNavigateFunction = (
  path: string,
  navigateState?: NavigateState
) => void

/* This hook aims at clearing the navigation history at each changement of page,
so that the user can't go back to the previous page. */
const useCustomNavigate = (): CustomNavigateFunction => {
  const navigate = useNavigate()
  return (path: string, navigateState?: NavigateState) =>
    navigate(path, { replace: true, state: navigateState })
}

export default useCustomNavigate
