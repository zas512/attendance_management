import './App.css'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import SignIn from './components/SignIn'
import Register from './components/Register'

function App() {


  return (
    <>
      <BrowserRouter>
        <section className="flex w-screen h-screen bg-slate-300 justify-center items-center">
          <Routes>
            <Route path='*' element={<div className="relative flex flex-col w-96 p-2 items-center h-auto border-[1px] rounded-2xl shadow-md bg-white border-slate-400">
                <div className="absolute top-0 flex mb-3">
                    <Link to='/' className="w-48 flex justify-center items-center rounded-tl-2xl cursor-pointer bg-green-600 h-12 font-bold"> Sign IN</Link>
                    <Link to='/signUp' className="w-48 flex justify-center items-center rounded-tr-2xl cursor-pointer bg-blue-600 h-12 font-bold"> Register</Link>
                </div>
                <div className="w-80 mt-16">
                    <Routes>
                    <Route path='/' element={<SignIn/>}/>
                    <Route path='/signUp' element={<Register/>}/>
                    </Routes>
                </div>
            </div>} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
