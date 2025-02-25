// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Registration from './components/Registration'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Service'
import Contact from './components/Contact'
import CustomTemplateForm from './components/CustomTemplateForm'
import SearchResults from './components/SearchResults'
import RegisterForm from './components/Registrationform'
import './App.css'



function App() {
    return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/customtemplate' element={<CustomTemplateForm />} />
      <Route path='/searchresults' element={<SearchResults />} />
      <Route path='/registerform' element={<RegisterForm />} />
      </Routes>
      </BrowserRouter>
      </>
    )}
    export default App
