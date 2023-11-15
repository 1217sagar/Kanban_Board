import { Route, Routes } from "react-router-dom";
import Comments from "./Components/Comments";
import Task from "./Components/Task";
import Login from "./Components/Login";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/task' element={<Task />} />
				<Route path='/comments/:category/:id' element={<Comments />} />
			</Routes>
		</div>
	);
}

export default App;