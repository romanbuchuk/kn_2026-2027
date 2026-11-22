import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';

import Posts from '@pages/Posts/Posts.jsx';
import Main from '@pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
]);

function App() {
  return (
    <div>
      {/*<SelectedItem item={selectedItem} />*/}
      {/* Posts */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
