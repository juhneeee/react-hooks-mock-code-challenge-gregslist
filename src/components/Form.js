import React, { useState } from "react";

function Form({toggleShowForm, addListing}){
    const [formData, setFormData] = useState({
        description: '',
        image: '',
        location: '',
    })

    function handleChange(e){
        const obj = {...formData, [e.target.name]:e.target.value}
        setFormData(obj)
    }

    function handleSubmit(e){
        e.preventDefault()
        const obj = {...formData, id: Math.random()}
        addListing(obj)
        toggleShowForm()
    }

 
    return <form onSubmit={handleSubmit}>
        <label></label>
        <input type="text" name='description' placeholder="enter description here"
            onChange={handleChange} value={formData.description}></input>
        <label></label>
        <input type="text" name='image' placeholder="enter image here"
            onChange={handleChange} value={formData.image}></input>
        <label></label>
        <input type="text" name='location' placeholder="enter location here"
            onChange={handleChange} value={formData.location}></input>
        <button type='submit' >Finish Submitting</button>
    </form>
}

export default Form;