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
    else{
        setIsDisabledButton(true)
    }

    return(
        
        <div className="inputs" style={{padding:10, marginTop: 10}}>
            <Input
                clazz = { form.name.length > 0 ? "nes-input is-success" : "nes-input is-dark" }              
                isEmpty
                id="name"
                label="Nombre"
                value={form.name}
                onChange={handleForm}
            />
            <Input
                clazz = { form.surname.length > 0 ? "nes-input is-success" : "nes-input is-dark" }
                isEmpty
                id="surname"
                label="Apellido"
                value={form.surname}
                onChange={handleForm}
            />
            <Input
                clazz = { form.email.length > 0 ? "nes-input is-success" : "nes-input is-dark" }
                isEmpty
                id="email"
                label="E-mail"
                value={form.email}
                onChange={handleForm}
            />
        </div>
    )
}