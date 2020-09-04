const initState = {
    authResponse:null,
    loading:false,
    validation:[]
    }
    
    
    const AuthReducer = (state=initState, action) =>{
        switch(action.type){
            case 'RESTART_AUTH_RESPONSE':
                return {
                    ...state,
                    authResponse:null,
                    loading:false,
                }
                case 'LOADING':
                    return {
                        ...state,
                        loading:true,
                        authResponse:'loading...'
                    }
            case 'SHORT_PASSWORD':
                console.log(action);
                return{
                    ...state,
                    loading:false,
                    authResponse: 'password is too short'
                 }
        
          case 'SIGNUP_SUCCESS':
              console.log(action)
              return {
                  ...state,
                  loading:false,
                  authResponse:'signup was successfully done',
              }
    
              case 'SIGNUP_ERROR':
                //   console.log(action.res.message)
                    // const msg=action.res.message.email[0] ? action.res.message.email[0] : action.res.message.role[0]
                    return {
                        ...state,
                        loading:false,
                        validation:action.res.message,
                    }
    
                    case 'CODE_ERROR':
                            console.log(action)
                            return {
                                ...state,
                                loading:false,
                                authResponse:'there seems to be a problem please try again later',
                            }
                            case 'LOGIN_SUCCESS':
                                // console.log(action)
                                return {
                                    ...state,
                                    loading:false,
                                    authResponse:'redirecting you to dashboard..',
                                }
                                case 'LOGIN_ERROR':
                                    console.log(action)
                                    return {
                                        ...state,
                                        loading:false,
                                        authResponse:action.res.message,
                                    }
    
                default:
                    return state
    
        }
    }
    
    export default AuthReducer;