import '../lib/amplify'; // side-effect config
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import '@aws-amplify/ui-react/styles.css';
// ✅ replace AmplifyProvider with ThemeProvider
import { ThemeProvider } from '@aws-amplify/ui-react';

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
