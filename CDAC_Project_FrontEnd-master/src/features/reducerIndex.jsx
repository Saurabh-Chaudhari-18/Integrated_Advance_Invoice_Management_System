import clientReducer from './client'
import loaderReducer from './loader'
import invoiceReducer from './invoice'
import productReducer from './products'
import paymentReducer from './payments'

const ReducerIndex={
    client:clientReducer,
    loader:loaderReducer,
    invoice:invoiceReducer,
    product:productReducer,
    payment:paymentReducer,
    
}

export default ReducerIndex;