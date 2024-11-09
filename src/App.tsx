import MapComponent from "@/components/map";
import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import SearchBar from "./components/search-bar";

function App() {
	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<MapComponent className="h-screen w-screen" />
				<SearchBar />
			</ThemeProvider>
		</>
	);
}

export default App;
