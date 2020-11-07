import React from 'react'


function UserCard({username,name,email,street,suite,city,zipcode}) {
    return (
        <div className='card_user'>
            <div className="header_card_user">
                <h4>{username}</h4>
            </div>
            <div className="body_card_user">
                <h5>Name :</h5>
                <p>{name} </p>
                <h5>e_mail</h5>
                <p>{email}</p>
                <h5>Adress :</h5>
                <p>{street} , {suite} - {city} - {zipcode}</p>

            </div>

        </div>
    )
}

export default UserCard
