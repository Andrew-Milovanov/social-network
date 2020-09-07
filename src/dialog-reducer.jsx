
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    info: [
     {id: 1, name: 'Dmitriy'},
     {id: 2, name: 'Alex'},
     {id: 3, name: 'Max'}
     ],
   
      message: [
       {id: '3', message: 'Hi'},
       {id: '3', message: 'How are you'},
       {id: '3', message: 'Good bay'}
     ],
    
   }

const dialogReducer = (state = initialState, action) => {


    switch(action.type){
        case SEND_MESSAGE: {
         let body =  action.newMessageBody;
        return {
            ...state,
            newMessageBody: "",
            message: [...state.message,{ id: 6, message: body}],
            
        }
        }
        default: 
         return state
    }
}
export const sendMessageCreator = (newMessageBody) =>{
        return{
            type: SEND_MESSAGE,
            newMessageBody
        }
      }

      
export default dialogReducer;