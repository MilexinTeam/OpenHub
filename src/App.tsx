
import './App.scss'
import Icon from './Icon'
import NotImplemented from './NotImplemented'
function App() {

  return (
    <>
    <header>
      <Icon />
      <nav>
        
        <ul>
          <li><button>Home</button></li>
          <li><button>About</button></li>
          <li><button>Browse</button></li>
          <li><button class='login'>Log in</button></li>

        </ul>
      </nav>
    </header>
<main>
  <h1>Discover packages with OpenHub</h1>
  <NotImplemented></NotImplemented>
</main>

    </>
  )
}

export default App
