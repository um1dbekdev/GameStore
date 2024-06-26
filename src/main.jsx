import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header'
import SectionWAN from './SectionWAN'
import Sctwo from './SCTWO'
import Banner from './banner'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header/>
   <SectionWAN/>
   <Sctwo/>
   <Banner/>
  </React.StrictMode>,
)
