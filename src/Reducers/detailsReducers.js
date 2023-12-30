export default (details={},action)=>{
    switch (action.type){
        case 'FETCH_DETAILS':
            return action.payload;
        case 'DELETE':
            return {};    
        default :
            return details;     
    }
};