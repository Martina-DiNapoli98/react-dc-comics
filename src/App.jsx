
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import menu from './data/menu'
import comics from './data/comics'
import list from './data/list'




function App() {

  return (
    <>
      <Header menu={menu} />
      <Main comics={comics} />
      <Footer list={list} />

    </>
  )
}

export default App
