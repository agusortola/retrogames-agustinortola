export const Input = ({id, label, value, onChange}) => {
return (
    <div class="nes-field">
        <label for="dark_field" >{label}</label>
        <input 
            class="nes-input is-dark"
            type="text" 
            onChange={({target}) => onChange(id, target.value)}
            value={value}
        />
    </div>

  
)
}