import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import HomeMenu from "@/views/HomeMenu"
import SharingPage from "./views/SharingPage"

const Routes = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route path="/share" element={<SharingPage />} />
      <Route path="/" element={<HomeMenu />} />
    </Switch>
  </BrowserRouter>
)

export default Routes
