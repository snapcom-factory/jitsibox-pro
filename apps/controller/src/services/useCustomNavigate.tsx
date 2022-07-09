import { useNavigate } from "react-router-dom"

export type CustomNavigateFunction = (
  path: string,
  state?: { [key: string]: boolean }
) => void

/* This hook aims at clearing the navigation history at each changement of page,
so that the user can't go back to the previous page. */
const useCustomNavigate = (): CustomNavigateFunction => {
  const navigate = useNavigate()
  return (path: string, state?: { [key: string]: boolean }) =>
    navigate(path, { replace: true, state: state ?? {} })
}

export default useCustomNavigate
