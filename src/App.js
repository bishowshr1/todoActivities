import React from 'react'
import { Route, Routes } from 'react-router';
import RootLayOut from './pages/RootLayOut';
import HomePage from './pages/HomePage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import DetailPage from './pages/DetailPage';
import Detail from './pages/Detail';
import Sample from './pages/Sample';
import TodoSlice from './components/features/TodoSlice';

const App = () => {


  return (
    <>

      <Routes>

        <Route path='/' element={<RootLayOut />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='detail_page/:category' element={<DetailPage />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='sample:id' element={<Sample />} />
          <Route path='TodoSlice/:id' element={<TodoSlice />} />


          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>

    </>
  )
}

export default App