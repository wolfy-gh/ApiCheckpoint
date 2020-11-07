import React from 'react'
import Card from './UserCard'

function Users({ listUsers }) {
    return (
        <div className="list_users">
            {listUsers.map((user, i) => <Card
                key={i}
                username={user.username}
                name={user.name}
                email={user.email}
                street={user.address.street}
                suite={user.address.suite}
                city={user.address.city}
                zipcode={user.address.zipcode} />)}
        </div>
    )
}

export default Users
