import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import HeroesList from './pages/HeroesList.tsx';
import HeroesDetail from './pages/HeroesDetail.tsx';
import Favorites from './pages/Favorites.tsx';
import { FavoriteProvider } from './context/favorites.tsx';

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
			},
			{
				path: "/favorites",
				element: <Favorites />
			},
		]
	}
])

createRoot(document.getElementById("root")!).render(
	<FavoriteProvider>
		<RouterProvider router={router} />
	</FavoriteProvider>,
);
