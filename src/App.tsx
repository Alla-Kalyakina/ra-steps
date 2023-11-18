/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import './App.css'
import AddingData from './components/AddingData'

export interface Form {
  date: string
  distance: number
}

function App() {

  const [form, setForm] = useState<Form>({
    date:'',
    distance: 0
  })

  const [arrForm, setArrForm] = useState<Form[]>([form])

  const handleFormChange = ({target}: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = target as HTMLInputElement;
    setForm(preform => ({...preform, [name]: value}))
    
  }
  
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setArrForm(preform => [...preform, form])
  }

  function handleClickRemove(date: string, distance: number) {
    setArrForm(arrForm.filter((elem)=> (elem.date != date && elem.distance != distance)));    
  }

  arrForm.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });
  
  return (
    <>
      <form action="/" method="post" onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label htmlFor="date" className="label">
              <span className="label-text">Дата (ДД.ММ.ГГГГ)</span>
            </label>
            <input  
                id= "date" name="date"
                value={form.date}
                onChange={handleFormChange}/>
          </div>
          <div className="form-control">
            <label htmlFor="distance" className="label">
              <span className="label-text">Пройдено, км</span>
            </label>
            <input  
                id= "distance" name="distance"
                value={form.distance}
                onChange={handleFormChange}/>
          </div>
          <button className="btn" type="submit">OK</button>
      </form>
      <AddingData arrForm={arrForm}
      handleClickRemove={handleClickRemove}/>
    </>
  )
}

export default App