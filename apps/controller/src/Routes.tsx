import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import HomeMenu from "@/views/HomeMenu"

const Routes = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<HomeMenu />} />
    </Switch>
  </BrowserRouter>
)

export default Routes
