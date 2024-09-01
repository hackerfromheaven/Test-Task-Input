import { Styles } from "./styles"
export default function InputAnnotation({state, helperTextMessage}){
    const classes = Styles({state})
    return(<p className={classes.annotation}>{helperTextMessage}</p>)
}