import { store } from "@app/store"
import { MainPage } from "@pages/main-page/ui/page"
import { Provider } from "react-redux"

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}

