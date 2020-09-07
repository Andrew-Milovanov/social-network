import React from 'react';
import p from './Dialog.module.css';
import DialogItem from './DialogItem';
import Message from './Message'
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from './utils/validators/validators';
import { Element } from './Users/FormsControls';


let MaxLenth = maxLengthCreator(100)
let TextArea = Element('textarea')

const AddMessageForm = (props)=> {
    return(
    <form onSubmit={props.handleSubmit}>
    <div>
    <Field placeholder={'Enter your message'} name={'newMessageBody'} validate={[required, MaxLenth]}  component={TextArea}/>
    </div>
    <div>
        <button>Send</button>
    </div>
 </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialog'})(AddMessageForm)




const Dialog = (props)=>{

    let state = props.dialogPage

    let DialogsElement = state.info.
    map(d=><DialogItem name={d.name} key={d.id} id={d.id} />)


    let MessageElement = state.message
    .map(m => <Message text={m.message}  key={m.id}/> )


    let addNewMessage = (values)=>{
        console.log(values.newMessageBody)
        props.sendMessage(values.newMessageBody)
    }

    return(
        <div className={p.dialogs}>
            <div className={p.dialogsItems}>
               {DialogsElement}
            </div>
            <div className={p.messages}>
            <div>
               {MessageElement}
            </div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
};
export default Dialog