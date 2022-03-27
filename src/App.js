import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Course } from './components/course/Course';
import { Home } from './components/home/Home';
import { Nav } from './components/layout/Nav';
import { Todo } from './components/todo/Todo';

function App() {
  return (
    <div className="App">
      <Nav />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/todo" element={<Todo />} />
  <Route path="/course" element={<Course />} />
</Routes>
    </div>
  );
}

export default App;
