import {Input} from './Input'
import { useState } from 'react';

export const Form = ({onSubmit, setIsDisabledButton}) => {

    const [form, setForm] = useState({
        name:'',
        surname:'',
        email:'',
    })

    const handleForm = (id, value) =>{
        const newForm = {...form, [id]: value}
        setForm(newForm)
    }
    
    if (form.name !== '' && form.surname !== '' && form.email){
        onSubmit(form)
        setIsDisabledButton(!setIsDisabledButton)
    }

    return(
        
            <div className="inputs">
            <Input
                id="name"
                label="Nombre"
                value={form.name}
                onChange={handleForm}
            />
            <Input
                id="surname"
                label="Apellido"
                value={form.surname}
                onChange={handleForm}
            />
            <Input
                id="email"
                label="E-mail"
                value={form.email}
                onChange={handleForm}
            />
            </div>
    )
}