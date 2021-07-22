import {types} from './types';

export const registroReducer = (state = {}, action) => {
   switch (action.type) {
       case types.login:
           return{
               id: action.payload.id,
               name: action.payload.displayName
           }
        case types.logout:
               return {}
       default:
               return state;
   }
}
