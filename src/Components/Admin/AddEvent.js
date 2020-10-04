import React, { useState } from 'react'

const AddEvent = () => {
    const [formInfo, setFormInfo] = useState({})

    return (
        <section className="add-event px-3">
            <h4 className="py-3">Add Event</h4>
            <form className="row">
                <div className="col-md-6">
                    <div className="d-flex flex-column px-4">
                        <label className="m-0">Event Title</label>
                        <input type="text" />
                    </div>
                    <div className="d-flex flex-column px-4 mt-4">
                        <label className="m-0">Description</label>
                        <textarea name="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex flex-column px-4">
                        <label className="m-0">Event Date</label>
                        <input type="date" />
                    </div>
                    <div className="d-flex flex-column px-4 mt-4">
                        <label className="m-0">Event Title</label>
                        <input type="file" disabled />
                    </div>
                </div>
                <input type="submit" value="Add Event" />
            </form>
        </section>
    );
};

export default AddEvent;