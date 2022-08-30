import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import style from './AddUser.module.css'
import { useState, useRef } from 'react'
import ErrorModal from '../UI/ErrorModal'
const AddUser = (props) =>
{
    // const nameInputRef = useRef();
    // const ageInputRef = useRef();
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState()
    const addUserHandeler = (event) =>
    {
        event.preventDefault()
        // const enteredName = nameInputRef.current.value;
        // const enteredUserAge = ageInputRef.current.value;
        if (username.trim().length === 0 || age.trim().length === 0)
        {
            setError({
                title: "Invalid Input",
                message: 'Please enter a valid name and age(non-empty values)'
            })
            return
        }
        if (+age < 1)
        {
            setError({
                title: "Invalid age",
                message: 'Please enter a valid age(age should be greater than 0)'
            })
            return
        }
        props.onAddUser(username, age);
        setUsername("")
        setAge("")
    }

    const usernameChangeHandler = (event) =>
    {
        setUsername(event.target.value)
    }
    const ageChangeHandler = (event) =>
    {
        setAge(event.target.value)
    }

    const errorHandler = () =>
    {
        setError(null);
    };
    return (
        <div>

            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

            <Card className={style.input}>
                <form onSubmit={addUserHandeler} >
                    <label htmlFor="username">Usermame</label>
                    <input type="text" id='username' value={username} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Yrs) </label>
                    <input type="number" id='age' value={age} onChange={ageChangeHandler} />
                    <Button type='submit' >Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser