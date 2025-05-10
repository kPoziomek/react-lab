import {type ChangeEventHandler, useState} from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('poziom@agh.edu.pl');
const [label, setLabel] = useState<string>('');
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (newEmail.length === 0) {
      setLabel('');
    } else if (newEmail.length <= 5) {
      setLabel('Ale masz krótki email');
    } else if (newEmail.length <= 10) {
      setLabel('Twój email jest odpowiedni');
    } else {
      setLabel('Ale email jest za długi');
    }
  }


  return (
    <>
      <div>
        <h1>System do zapisów na zajęcia</h1>
        <h2>Twój e-mail to {email}</h2>
        {label.length > 0  && <p>{label}</p>}
        <input type="text" value={email} onChange={handleChange}/>
      </div>
      </>
  )
}

export default App
