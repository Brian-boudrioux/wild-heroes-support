import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import HeroesList from './components/HeroesList.tsx';
import HeroesDetail from './components/HeroesDetail.tsx';

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HeroesList />
			},
			{
				path: "/heroes/:id",
				element: <HeroesDetail />
			}
		]
	}
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
