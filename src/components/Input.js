export const Input = ({id, label, value, onChange, clazz}) => {

    return (
        <div class="nes-field" style={{padding:10}}>
            <label for="dark_field">{label}</label>     
                <input            
                    class={clazz}
                    style={{backgroundColor:'#212529'}}
                    type="text" 
                    onChange={({target}) => onChange(id, target.value)}
                    value={value}
                />
        </div>  
    )
}