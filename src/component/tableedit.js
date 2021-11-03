import React from 'react'

function TableEdit(props) {

  

    const handleEditChangeFirst = (e) => {
        props.resultUser.data.firstName = e.target.value
        const firstName = props.resultUser.data.firstName  

        props.setCurrentResult({ ...props.currentResult, firstName})

        console.log(props.currentResult)
    }

    const handleEditChangeLast = (e) => {
        props.resultUser.data.lastName = e.target.value
        const lastName = props.resultUser.data.lastName  

        props.setCurrentResult({ ...props.currentResult, lastName})

        console.log(props.currentResult)
    }

    const handleEditChangeGender = (e) => {
        props.resultUser.data.gender = e.target.value
        const gender = props.resultUser.data.gender  

        props.setCurrentResult({ ...props.currentResult,  gender})

        console.log(props.currentResult)
    }

    const handleEditChangeTel = (e) => {
        props.resultUser.data.tel = e.target.value
        const tel = props.resultUser.data.tel  

        props.setCurrentResult({ ...props.currentResult, tel})

        console.log(props.currentResult)
    }

    const handleEditChangeNationality = (e) => {
        props.resultUser.data.nationality = e.target.value
        const nationality = props.resultUser.data.nationality  

        props.setCurrentResult({ ...props.currentResult, nationality})

        console.log(props.currentResult)
    }
    

    

    return (
        <tr className="row">
            <td><input type="checkbox" /></td>
            <td> <input type="text" defaultValue={props.resultUser.data.firstName} onChange={handleEditChangeFirst} />  <input type="text" defaultValue={props.resultUser.data.lastName} onChange={handleEditChangeLast} /></td>
            <td> <input type="text" defaultValue={props.resultUser.data.gender} onChange={handleEditChangeGender} /></td>
            <td> <input type="text" defaultValue={props.resultUser.data.tel} onChange={handleEditChangeTel} /></td>
            <td> <input type="text" defaultValue={props.resultUser.data.nationality} onChange={handleEditChangeNationality} /></td>
            <td><button onClick={(e) => props.handleUpdateResultUser(e, props.resultUser)}>UPDATE</button></td>
        </tr>
    )
}

export default TableEdit