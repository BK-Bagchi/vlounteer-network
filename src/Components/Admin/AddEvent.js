import React, { useState } from 'react'

const AddEvent = () => {
    const [formInfo, setFormInfo] = useState({
        name: '', description: '', date: '', image: 'libraryBooks.png', color: '#badc58'
    })
    const [errorMessage, setErrorMessage] = useState({})

    const collectFormInfo = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'title') {
            (value.length >= 10) ?
                crossCheck('name', value, 'name', '') : crossCheck('name', '', 'name', 'Insert a meaningful event title')
        }
        else if (name === 'description') {
            setFormInfo({ ...formInfo, description: value })
        }
        else if (name === 'date') {
            setFormInfo({ ...formInfo, date: value })
        }
    }
    const crossCheck = (infoKey, infoData, errKey, errData) => {
        setFormInfo({ ...formInfo, [infoKey]: infoData })
        setErrorMessage({ ...errorMessage, [errKey]: errData })
    }
    const addEventToDatabase = (e) => {
        e.preventDefault()
        const { name, date } = formInfo
        if (!date) {
            setErrorMessage({ ...errorMessage, date: 'Please insert a date' })
            return
        }
        else
            setErrorMessage({ ...errorMessage, date: '' })

        if (name) {
            fetch('https://agile-plains-56011.herokuapp.com/adminInsertEvent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formInfo)
            })
                .then(res => res.json())
                .then(result => {
                    setErrorMessage({ message: `${result.insertedCount} new event(s) added successfully` })
                })
        }
        else setErrorMessage({ ...errorMessage, message: 'Fields with \'*\' sign in required' })
    }

    return (
        <section className="add-event px-3">
            <h4 className="py-3">Add Event</h4>
            <form className="row" onSubmit={addEventToDatabase}>
                <div className="col-md-6">
                    <div className="d-flex flex-column px-4">
                        <label className="m-0">Event Title</label>
                        <input name="title" type="text" placeholder="Event Title" onBlur={collectFormInfo} />
                        <span className="error">{errorMessage.name}</span>
                    </div>
                    <div className="d-flex flex-column px-4 mt-2">
                        <label className="m-0">Description</label>
                        <textarea name="description" cols="30" rows="10" placeholder="Event Description" onBlur={collectFormInfo}></textarea>
                        <span className="text-danger">{errorMessage.message}</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex flex-column px-4">
                        <label className="m-0">Event Date</label>
                        <input name="date" type="date" onChange={collectFormInfo} />
                        <span className="error">{errorMessage.date}</span>
                    </div>
                    <div className="d-flex flex-column px-4 mt-2">
                        <label className="m-0">Event Title</label>
                        <input name="file" type="file" disabled />
                        <span className="error">Add title and date and submit it. Description optional</span>
                    </div>
                </div>
                <input type="submit" value="Add Event" />
            </form>
        </section>
    );
};

export default AddEvent;