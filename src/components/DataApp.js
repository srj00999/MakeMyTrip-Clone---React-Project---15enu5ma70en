import React, { useEffect, useState } from 'react'

export const DataAppContext = React.createContext();

const DataApp = (props) => {

    const initialState = {
        // loginStatus: false, //false means not logged in
        // username: '', //username
        searchFrom: '',
        searchTo: '',
        cityOrLocation: '',
        checkInData: '',
        checkOutDta: '',
        guest: '',
        loginStatus: false, //false means not logged in
        username: '', //username
        searchDate: '',
        password: '',
        baseFare: ''

        // searchDate: ''
    }
    const [appState, setAppState] = useState(initialState);

    useEffect(() => {
        // console.log('Context Data - ', appState);
    })

    return (
        <>
            <DataAppContext.Provider value={{ appState, setAppState }}>
                {props.children}
            </DataAppContext.Provider>

        </>
    )
}

export default DataApp
