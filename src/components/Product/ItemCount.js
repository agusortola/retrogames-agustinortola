import { Fragment } from "react";
export const ItemCount = (props) => {

    return ( 
        <Fragment>
            <button type="button" class="nes-btn is-primary" onClick={() => props.onRemove()}>-</button>
            <button type="button" class="nes-btn is-success" onClick={() => props.onConfirm()}>Add {props.count}</button>
            <button type="button" class="nes-btn is-primary" onClick={() => props.onAdd()}>+</button>
        </Fragment >
     );
}
 
