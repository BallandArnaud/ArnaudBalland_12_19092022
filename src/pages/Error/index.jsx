import { Link } from 'react-router-dom'
import './index.css'

function Error() {
  return (
    <main className="error">
      <h1>Oups... la page que vous recherchez n'existe pas</h1>
      <Link to="/">Retour à l'acceuil</Link>
    </main>
  )
}

export default Error
