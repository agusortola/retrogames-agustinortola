import { useState } from 'react';

export const Input = ({id, label, value, onChange}) => {


return (
    <div class="nes-field" style={{padding:10}}>
        <label for="dark_field">{label}</label>     
            <input            
                class="nes-input is-dark"
                type="text" 
                onChange={({target}) => onChange(id, target.value)}
                value={value}
            />
    </div>

  
)
}