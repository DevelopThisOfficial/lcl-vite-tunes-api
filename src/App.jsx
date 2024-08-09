import './style.css'
// import './App.css'
import APICard from './components/ApiCallCard'
import ModalCard from './components/ModalCard'

function App() {

  return (
    <>
      <header>
        <h1>Tunes React App</h1>
      </header>
      <main>
        <APICard />
        <ModalCard />
      </main>
      <footer>
        <h3>Created with Develop.this</h3>
      </footer>
    </>
  )
}

export default App
