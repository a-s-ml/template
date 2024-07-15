import { Provider } from "react-redux"
import { store } from "./components/store"
import { MainPage } from "./components/pages"

export const App = () => {
	return (
		<Provider store={store}>
			<MainPage />
		</Provider>
	)
}
