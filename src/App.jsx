
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import menu from './data/menu'


function App() {

  return (
    <>
      <Header menu={menu} />
      <Main />
      <Footer />
    </>
  )
}

export default App
