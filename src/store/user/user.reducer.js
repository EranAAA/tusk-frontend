
import { userService } from "../../services/user.service.js"

const guestUser = { _id: '1', fullname: 'Guest', username: 'Guest@gmail.com', imgURL: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }

const initialState = {
   count: 10,
   user: userService.getLoggedinUser() || guestUser,
   users: [],
   watchedUser: null
}
export function userReducer(state = initialState, action) {
   var newState = state
   switch (action.type) {
      case 'SET_USER':
         newState = { ...state, user: action.user ? action.user : guestUser }
         break
      case 'SET_WATCHED_USER':
         newState = { ...state, watchedUser: action.user }
         break
      case 'REMOVE_USER':
         newState = { ...state, users: state.users.filter(user => user._id !== action.userId) }
         break
      case 'SET_USERS':
         newState = { ...state, users: action.users }
         break
      case 'SET_SCORE':
         newState = { ...state, user: { ...state.user, score: action.score } }
         break
      default:
   }
   return newState

}
