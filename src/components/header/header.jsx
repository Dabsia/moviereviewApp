import React from 'react';




const Header = ({handleSubmit, handleChange}) => {
    return (
        <div className="header">
            <form action="" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="search" name="search" placeholder='Search Movie' id="search" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Header