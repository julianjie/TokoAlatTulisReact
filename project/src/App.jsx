import React,{Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route,NavLink} from 'react-router-dom'

const Home = React.lazy(() => import('./components/Home'))
const PegawaiList = React.lazy(() => import('./components/Pegawai/List'))
const PelangganList = React.lazy(()=>import('./components/Pelanggan/List'))

function App() {

  return (
<Router>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Toko AlatTulis</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className={({isActive})=> `nav-link ${isActive?"active":""}`} aria-current="page" to={'/'}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=> `nav-link ${isActive?"active":""}`} aria-current="page" to={'/pelanggan'}>Pelanggan</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=> `nav-link ${isActive?"active":""}`} aria-current="page" to={'/pegawai'}>Pegawai</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=> `nav-link ${isActive?"active":""}`} aria-current="page" to={'/alatTulis'}>AlatTulis</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=> `nav-link ${isActive?"active":""}`} aria-current="page" to={'/transaksi'}>Transaksi</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          {/* Home */}
          <Route path= '/' element={<Home/>}/>

          {/* Pegawai */}
          <Route path= '/pegawai' element={<PegawaiList/>}/>

          {/* Pelanggan */}
          <Route path='/pelanggan' element={<PelangganList />}/>

          {/* Alat Tulis */}

          {/* Transaksi */}
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
