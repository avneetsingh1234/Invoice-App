export default (itemDetails=[],action)=>{
    switch (action.type){
        case 'FETCH_ITEM':
            return [...itemDetails,action.payload];
        case 'DELETE_ITEM':
            return itemDetails.filter((e) => e.itemId!=action.id);    
        case 'DELETE':
            return [];     
        default :
            return itemDetails;     
    }
};