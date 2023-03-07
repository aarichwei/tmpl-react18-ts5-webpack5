import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import router from './routes/main'
import './main.less';
import './main.scss';

createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />
);
