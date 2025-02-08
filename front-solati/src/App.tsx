import { AppRouter } from "./routers/AppRouter";

import ResponsiveNavBar from "./components/layout/ResponsiveNavBar";

const App = () => {

  return (
    <>
      <ResponsiveNavBar />
      <AppRouter />
    </>    
  )
}

export default App;