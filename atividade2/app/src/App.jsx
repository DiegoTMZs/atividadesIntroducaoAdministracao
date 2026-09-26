import './App.css'
import Apresentacao from './components/Apresentacao'
import Dividir from './components/Dividir'
import Multiplicar from './components/Multiplicar'
import Somar from './components/Somar'
import Subtrair from './components/Subtrair'

function App() {

  return (
    <>
      <section>
        <div>
          <Apresentacao></Apresentacao>
          <Somar></Somar>
          <Subtrair></Subtrair>
          <Multiplicar></Multiplicar>
          <Dividir></Dividir>
        </div>
      </section>
    </>
  )
}

export default App
