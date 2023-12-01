/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import AddingData from './AddingData'

export interface Form {
  date: string
  distance: number
}

export default function Form() {

  const [form, setForm] = useState<Form>({
    date:'',
    distance: 0
  })

  const [arrForm, setArrForm] = useState<Form[]>([])

  const handleDataChange = (e: { target: { name: string; value: string } }) => {
    setForm(preform => ({...preform, [e.target.name]: e.target.value}))
  }

  const handleDistanceChange = (e: { target: { name: number; value: number } }) => {
    setForm(preform => ({...preform, [e.target.name]: Number(e.target.value)}))
  }
  
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    setArrForm(preform => [...preform, form].reduce((acc, entry) => {
      const date = entry.date
      const repeatElem: Form = acc.find(elem => elem.date === date)
      if(repeatElem !== undefined){
        repeatElem.distance += entry.distance
      } else {
          acc.push(entry)
      }
      return acc
    }, []))
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
  })

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
                onChange={handleDataChange}/>
          </div>
          <div className="form-control">
            <label htmlFor="distance" className="label">
              <span className="label-text">Пройдено, км</span>
            </label>
            <input  
                id= "distance" name="distance"
                value={form.distance}
                onChange={handleDistanceChange}/>
          </div>
          <button className="btn" type="submit">OK</button>
      </form>
      <AddingData arrForm={arrForm}
      handleClickRemove={handleClickRemove}/>
    </>
  )
}