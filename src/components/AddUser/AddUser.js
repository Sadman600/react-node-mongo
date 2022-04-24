import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
        console.log(user);

        //Post User
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('User addded successfull');
                event.target.reset();
            })
    }
    return (
        <div>
            <h1>Plz add a new user</h1>
            <form onSubmit={handleAddUser}>
                <input type='text' name='name' placeholder='name' required></input>
                <input type='email' name='email' placeholder='email' required></input>
                <input type='submit' value='Add User' ></input>
            </form>
        </div>
    );
};

export default AddUser;