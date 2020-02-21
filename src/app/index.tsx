import * as React from 'react';
import { hot } from 'react-hot-loader';

import AppRoutes from './routes/index'
export const App = hot(module)(() => (
  <AppRoutes />
));