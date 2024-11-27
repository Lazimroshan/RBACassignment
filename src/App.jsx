import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebaradmin from './Components/Pages/Sidebaradmin'
import Users from './Components/Pages/Users'
import { createContext } from 'react'
import data from './Components/Userdata'
import Viewandedit from './Components/Pages/Viewandedit'
import Adduser from './Components/Pages/Adduser'




const Newcontext = createContext()

function App() {
 const [Data, setData] = useState(data)

 

  return (
    <>
  <div className='flex '>
    <Newcontext.Provider value={[Data,setData]}>
    <BrowserRouter>
    <Routes>
     <Route path='/Users' element={<><Sidebaradmin/><Users/></>}/>
     <Route path='/Edit/:user' element={<><Sidebaradmin/><Viewandedit/></>}/>
     <Route path='/' element={<><Sidebaradmin/><Adduser/></>}/>
    </Routes>
    </BrowserRouter>
    </Newcontext.Provider>
    </div>

    </>
  )
}

export default App
export {Newcontext}
