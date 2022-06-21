
import {Analytics} from '../Analytics'
import ReactDom from 'react-dom'
import './index.css'

export const Modal=({open, children})=>{
    if (!open) return null;
    console.log(open)
    return ReactDom.createPortal(
    <main className="modal">
        {children}
    </main>,
    document.getElementById('portal')
)
}