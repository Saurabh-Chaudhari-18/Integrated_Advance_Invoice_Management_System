import {clients} from "./client"
import {loader} from './loader'
import {invoices} from './invoice'
import {product } from './products'
import { payment } from "./payments"


const actionIndex={
    setClientList:clients,
    setToggleLoader:loader,
    setInvoices:invoices,
    setProducts:product,
    setPayments:payment,

}
export default actionIndex;