import React, {useEffect, useState} from 'react'

//destructuring props in the parameter
function StudentDetail( {student, onDelete} ) {

    //props will look like this
    /*
    props = {
        student: Object,
        onDelete: Function
    }
    */
    const [count, updateCount] = useState(0)
    const [myName, updateName] = useState('Manish')

    // conditional componentDidUpdate for count
    // call it everytime count is updated
    useEffect(() => {
        console.log('Student Detail has updated count')
       
    }, [count])

    // conditional componentDidUpdate for name
     // call it everytime name is updated
    useEffect(() => {
        console.log('Student Detail has updated name')
        // magically know that the name has been updated
    }, [myName])

    // componentDidMount
    // call it onlyonce after the first render
    useEffect(() => {
        console.log('Student Detail has been Mounted')
    }, [])

    // componentDidUpdate
    // call it everytime after re rendering when any state has been changed
    useEffect(() => {
        console.log('Student Detail has been Updated')
    })

    // componentWillUnmount
    // call it only once when the component is removed from the screen
     useEffect(() => {
       return () => {
            console.log('Student Detail has been Unmounted')
       }
    }, [])

    const {name, city, id} = student
    return (
        <div>
            <h1>{name}</h1>
            <p>From {city}</p>
            <button onClick={() => { onDelete(id) }}>Delete</button>
        </div>
    )
}

export default StudentDetail
