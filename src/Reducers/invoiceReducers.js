export default (invoiceDetails={},action)=>{
    switch (action.type){
        case 'FETCH_INVOICE':
            return action.payload;
        case 'DELETE':
            return {};     
        default :
            return invoiceDetails;     
    }
};