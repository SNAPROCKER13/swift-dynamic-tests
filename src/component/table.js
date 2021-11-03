import react, { useState } from "react";
import '../pages/page.css'


function Table(props) {     

    const handleDelete = (id) => {
        const removeItem = props.resultUsers.filter((resultUser) => {
            return resultUser.id !== id
        })

        props.setResultUsers(removeItem)
    }

    

    const handleEdit = (e, resultUser, id) => {
        e.preventDefault()

        props.setIsEdit(false)
        props.setEditId(id)
        props.setCurrentResult({ ...resultUser })
    }



    return (
        <tr className="row">
            <td><input type="checkbox" onChange={(e) => props.handleChange(e, props.resultUser.id)} checked={props.resultUser ?. isChecked || false}/></td>
            <td>{props.resultUser.data.firstName} {props.resultUser.data.lastName}</td>
            <td>{props.resultUser.data.gender}</td>
            <td>{props.resultUser.data.tel}</td>
            <td>{props.resultUser.data.nationality}</td>
            <td><button onClick={(e) => handleEdit(e, props.resultUser, props.resultUser.id)}>EDIT</button> / <button onClick={() => handleDelete(props.resultUser.id)}>DELETE</button></td>
        </tr>
    )
}

export default Table