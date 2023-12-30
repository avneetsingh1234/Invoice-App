const setInvoice = (data) => {
    return {type:'FETCH_INVOICE',payload:data}
};

const setDetails = (data) => {
    return {type:'FETCH_DETAILS',payload:data}
};

const setItems = (data) => {
    return {type:'FETCH_ITEM',payload:data}
};

const deleteItems = (id) => {
    return {type:'DELETE_ITEM',id}
}
const deleteAll = () =>{
    return {type:'DELETE'}
}
export {setInvoice,setDetails,setItems,deleteItems,deleteAll};