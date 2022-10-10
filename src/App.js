import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/blog/Blog';
import Chart from './component/chart/Chart';
import Main from './component/main/Main';
import Quiz from './component/quiz/Quiz';
import Subject from './component/subject/Subject';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Subject></Subject>
        },
        {
          path: '/chart',
          element: <Chart></Chart>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/topic/:skillId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.skillId}`)
          },
          element: <Quiz></Quiz>
        },
      ]
    },
    {path:'*', element: <div>Page not Found</div>}
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
