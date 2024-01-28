import { Form } from "./Form"

interface AddingDataPrors {
    arrForm: Form[];
    handleClickRemove: (date: string) => void,
}

export default function AddingData({arrForm, handleClickRemove} : AddingDataPrors ) {

    return (
        <>
            <div>{arrForm.map((elem, index) => 
                <div key={index}>
                    <div className="date">{elem.date}</div>
                    <div className="distance">{elem.distance}</div>
                    <button onClick={()=>handleClickRemove(elem.date)}>✘</button>
                </div>
             )}</div>
        </>
    )
}