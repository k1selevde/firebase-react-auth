import React from 'react';
import app from './base.js'

const Home = () => {
    return (
        <>
            <h1>Home page</h1>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </>
    )
}

export default Home;