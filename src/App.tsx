import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import heroes from './data.json';
import HeroesList from './components/HeroesList';
import HeroesDetail from './components/HeroesDetail';

const router = createBrowserRouter([
  {path: '/', element: <HeroesList heroes={heroes} />},
  {path: '/:id', element: <HeroesDetail />}
])

function App() {
  console.log(heroes);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
