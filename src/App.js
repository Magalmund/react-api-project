// import './App.css';
import { NewsContextProvider } from './context/NewsContext';
import News from './components/News';
import "./App.css";

function App() {
  return (
	<NewsContextProvider>
		<News/>
	</NewsContextProvider>
	);
}

export default App;
