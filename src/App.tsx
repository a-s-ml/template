import { Provider } from "react-redux"
import { store } from "./components/store"
import { Main } from "./components/pages"

export const App = () => {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	)
}
