import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header.jsx'
import Section from './section.jsx'
import Footer from './footer.jsx'
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Section />
    <Footer />
  </StrictMode>,
)