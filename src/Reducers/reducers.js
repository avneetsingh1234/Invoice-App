import {combineReducers} from 'redux';
import invoiceReducers from './invoiceReducers';
import detailsReducers from './detailsReducers';
import itemReducers from './itemReducers';

export default combineReducers({invoiceReducers,detailsReducers,itemReducers});