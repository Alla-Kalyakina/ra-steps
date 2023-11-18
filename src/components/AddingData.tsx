
export default function AddingData(arrForm, handleClickRemove) {

    return (
        <>
            <div>{arrForm.map((elem, index) => 
                <div key={index}>
                    <div className="date">{elem.date}</div>
                    <div className="distance">{elem.distance}</div>
                    <button onClick={()=>handleClickRemove(elem.date, elem.distance)}>✘</button>
                </div>
             )}</div>
        </>
    )
}