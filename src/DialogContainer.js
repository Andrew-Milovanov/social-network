import React from 'react';
import {sendMessageCreator} from './dialog-reducer';
import Dialog from './Dialog';
import { connect } from 'react-redux';
import { withAuthRedirect } from './hoc/withAuthRedirect';
import { compose } from 'redux';






    let mapStateToPorops = (state)=> {
    return{
        dialogPage: state.dialogPage,
    }
}
    let mapDispatchToPorops =(dispatch)=>{
        return{
            sendMessage: (newMessageBody)=>{ dispatch(sendMessageCreator(newMessageBody))}

        }
    }


export default compose(
    connect(mapStateToPorops,mapDispatchToPorops),
    withAuthRedirect
    )
    (Dialog)