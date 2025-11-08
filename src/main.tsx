import { StrictMode } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router"
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import { MyRouter } from './router/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MyRouter/>
    </BrowserRouter>
  </StrictMode>
)
