import { useEffect, useState } from "react";
import "../assets/styles/Form/form.scss";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Select from "@mui/material/Select";
import ResponsiveDialog from "./dialog";
import FindAndSelect from "./findAndSelect";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AlertDialog from "./alertDialog";
import { createClinet } from "../service/clients";
import { createProducts } from "../service/products";
import { createInvoice } from "../service/invoice";
import actionIndex from "../features/actionIndex";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function DynamicFormForInvcoie(params) {
  const dispatch=useDispatch();
  const [enableRecField, setEnableRecField] = useState(false);
  const [recurringCycle, setRecurringCycle] = useState(0);
  const [selctedClient, setSelctedClient] = useState({});
  const [selctedProducts, setSelctedProducts] = useState([]);
  const[totalSum,setTotalSum]=useState(0);
  const [products, setProducts] = useState([]);
  const [invoiceStatus,setInvoiceStatus]=useState("");

  function generate(id, name, unitPrice, quantity) {
    setTotalSum(totalSum + unitPrice * quantity)
    return { id, name, unitPrice, quantity, totalPrice: unitPrice * quantity };
  }
  useEffect(() => {
    console.log(selctedProducts)
    if(selctedProducts.length>0){
      selctedProducts.map((item) => {
        setProducts([
          ...products,
          generate(item.product_id, item.product_name, item.product_price, 1),
        ]);
      });
    }
    console.log(selctedProducts)
  }, [selctedProducts]);

  const handleChange = (event) => {
    setRecurringCycle(event.target.value);
  };
  const handleInvoiceStatus=(event)=>{
    setInvoiceStatus(event.target.value);
  }
  async function handleInvoiceForm() {
    dispatch(actionIndex.setToggleLoader(true));
    const obj={
      client_name:selctedClient?.client_name,
      amount_total:totalSum,
      amount_due:totalSum,
      amount_paid:0,
      due_date:document.getElementById('invoice_due_date_field').value,
      issue_date:document.getElementById('invoice_due_date_field').value,
      invoice_recurring_cycle:recurringCycle ?`${recurringCycle} months`: null,
      status:invoiceStatus,
      client_id:selctedClient
    }
    
    try {
      const response = await createInvoice(obj);
      if (response?.client_id) {
        
        setTimeout(() => {
          dispatch(actionIndex.setToggleLoader(false));
          console.log("response from cliet form=====>", response);
          
        }, 2000);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form_outer">
      <form>
        <div className="first_form_row form_row">
          <div className="form_item">
            <label for="client">Enter the client name</label>
            <input
              placeholder="Chose the client"
              type="text"
              name="client"
              class="input"
              disabled
              value={selctedClient?.client_name}
              id="invoice_client_name_field"
            ></input>
            <div className="client_selection_option">
              <ResponsiveDialog
                icon={<AddIcon />}
                title={"Add Client"}
                component={<ClientForm />}
              />
              <ResponsiveDialog
                icon={<PersonSearchIcon />}
                title={"Find And Select"}
                component={
                  <FindAndSelect
                    id={"client"}
                    searchFor={1}
                    selectHandler={setSelctedClient}
                  />
                }
              />
            </div>
          </div>

          <div className="form_item">
            <label for="status">Select the status from below</label>
            {/* <input
              placeholder="status"
              type="text"
              name="status"
              class="input"
              id="invoice_status_field"
            ></input> */}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "15px" }}
                >
                  Select Invoice Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={invoiceStatus}
                  label="Recurring cycle"
                  onChange={handleInvoiceStatus}
                >
                  <MenuItem value={'paid'}>Paid</MenuItem>
                  <MenuItem value={'unpaid'}>Unpaid</MenuItem>
                  <MenuItem value={'partial paid'}>Partial Paid</MenuItem>
                  <MenuItem value={'overdue'}>Overdue</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="second_form_row form_row">
          <div className="form_item">
            <label for="issueDate">Enter the issue date</label>
            <input
              placeholder="issueDate"
              type="date"
              name="issueDate"
              class="input"
              id="invoice_issue_date_field"
            ></input>
          </div>

          <div className="form_item">
            <label for="dueDate">Enter the due date</label>
            <input
              placeholder="Due Date"
              type="date"
              name="dueDate"
              class="input"
              id="invoice_due_date_field"
            ></input>
          </div>

          <div className="form_item">
            <label >Select product / add new product.</label>
            <div className="product_selection_container">
              <ResponsiveDialog
                icon={<AddIcon />}
                title={"Add Product"}
                component={<ProductForm />}
              />
              <ResponsiveDialog
                icon={<ShoppingCartIcon />}
                title={"Find And Select"}
                component={
                  <FindAndSelect
                    id={"product"}
                    searchFor={2}
                    selectHandler={setSelctedProducts}
                    products={selctedProducts}
                  />
                }
              />
            </div>
          </div>
        </div>

        <div className="third_form_row form_row">
          <TableContainer component={Paper} style={{ marginTop: "30px" }}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Product Id</TableCell>
                  <TableCell align="right">Product Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Unit Price</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.length>0?products.map((product) => (
                  <TableRow
                    key={product?.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product?.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product?.name}
                    </TableCell>
                    <TableCell align="right">{product?.quantity}</TableCell>
                    <TableCell align="right">{product?.unitPrice}</TableCell>
                    <TableCell align="right">{product?.totalPrice}</TableCell>
                  </TableRow>
                )):""}
              </TableBody>
            </Table>
          </TableContainer>
          <div class="card checkout checkout_card">
            <label class="title">Checkout</label>
            <div class="details">
              <span>Your subtotal:</span>
              <span>{totalSum}</span>
              <span>Discount through applied coupons:</span>
              <span>0%</span>
              <span>Shipping fees:</span>
              <span>0%</span>
            </div>
            <div class="checkout--footer">
              <label class="price">
                <sup>
                  <CurrencyRupeeIcon />
                </sup>
                {totalSum}
              </label>
             
            </div>
          </div>
        </div>

        <div className="fourth_form_row form_row">
          <div className="rec_lable">
            <div className="text">Recurring cycle</div>

            <Switch onClick={() => setEnableRecField(!enableRecField)} />
          </div>

          {enableRecField ? (
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "15px" }}
                >
                  Recurring cycle
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={recurringCycle}
                  label="Recurring cycle"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={3}>3 Months</MenuItem>
                  <MenuItem value={6}>6 Months</MenuItem>
                  <MenuItem value={12}>12 Months</MenuItem>
                </Select>
              </FormControl>
            </Box>
          ) : (
            ""
          )}
          <AlertDialog submitHandler={handleInvoiceForm} />
        </div>
      </form>
    </div>
  );
}

export function ClientForm(params) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [apiId, setApiId] = useState(0);
  const [inputFormData, setInputFormData] = useState({});
  const [clientStatus,setClienStatus]=useState('');

  function handleClietStatus(event) {
    setClienStatus(event.target.value)
  }

  async function handleClientsForm(params) {
    dispatch(actionIndex.setToggleLoader(true));

    const obj = {
      client_name: document.getElementById("client_name_field").value,
      client_email: document.getElementById("client_email_field").value,
      status: clientStatus,
      phone: document.getElementById("client_phone_field").value,
      state: document.getElementById("client_state_field").value,
      country: document.getElementById("client_country_field").value,
      city: document.getElementById("client_city_field").value,
      address: document.getElementById("client_address_field").value,
      password: "6566#AB#6768#CD",
      postal_code: document.getElementById("client_postal_code_field").value,
      admin_id: JSON.parse(localStorage.getItem("admin")),
    };

    try {
      const response = await createClinet(obj);
      if (response?.client_id) {
        // params.handleClose();
        setTimeout(() => {
          dispatch(actionIndex.setToggleLoader(false));
          console.log("response from cliet form=====>", response);
          // navigate('/clients');
        }, 2000);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="form_outer">
      <form>
        <div className="first_form_row form_row">
          <div className="form_item">
            <label for="clientName">Enter client's name</label>
            <input
              placeholder="Add client name"
              type="text"
              name="client"
              class="input"
              id="client_name_field"
            ></input>
          </div>

          <div className="form_item">
            <label for="status">Enter client status</label>
            {/* <input
              placeholder="status"
              type="text"
              name="status"
              class="input"
              id="client_status_field"
            ></input> */}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "15px" }}
                >
                  Select Client Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={clientStatus}
                  label="Recurring cycle"
                  onChange={handleClietStatus}
                >
                  <MenuItem value={'active'}>Active</MenuItem>
                  <MenuItem value={'frequent'}>Frequent</MenuItem>
                  <MenuItem value={'offline'}>Offline</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="second_form_row form_row">
          <div className="form_item">
            <label for="mobileNumber">Enter the clients Mobile Number</label>
            <input
              placeholder="mobile number"
              type="number"
              name="mobileNumber"
              class="input"
              id="client_phone_field"
            ></input>
            
          </div>

          <div className="form_item">
            <label for="email">Enter Client Email </label>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              class="input"
              id="client_email_field"
            ></input>
          </div>

          <div className="form_item">
            <label for="address">Enter Clients Address</label>
            <textarea
              placeholder="Address"
              type="text"
              name="address"
              class="input"
              id="client_address_field"
            ></textarea>
          </div>
        </div>
        <div className="third_for_row form_row">
          <div className="form_item">
            <label for="postalCode">Enter Client's city</label>
            <input
              placeholder="city"
              type="text"
              name="postalCode"
              class="input"
              id="client_city_field"
            ></input>
          </div>
          <div className="form_item">
            <label for="postalCode">Enter Client's postal code</label>
            <input
              placeholder="postal code"
              type="number"
              name="postalCode"
              class="input"
              id="client_postal_code_field"
            ></input>
          </div>
          <div className="form_item">
            <label for="country">Enter Client's Contry</label>
            <input
              placeholder="country"
              type="email"
              name="country"
              class="input"
              id="client_country_field"
            ></input>
          </div>
          <div className="form_item">
            <label for="state">Enter Client's State</label>
            <input
              placeholder="state"
              type="state"
              name="country"
              class="input"
              id="client_state_field"
            ></input>
          </div>
        </div>
        <AlertDialog submitHandler={handleClientsForm} />
      </form>
    </div>
  );
}

export function ProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productCategory, setProduct] = useState("");
  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  async function handleProductsForm(params) {
    dispatch(actionIndex.setToggleLoader(true));

    const obj = {
      product_category: productCategory,
      product_name: document.getElementById("product_name_field").value,
      product_price: document.getElementById("product_price_field").value,
    };

    try {
      const response = await createProducts(obj);
      if (response?.product_id) {
        setTimeout(() => {
          dispatch(actionIndex.setToggleLoader(false));
          console.log("response from product form=====>", response);
          // navigate('/products');
        }, 2000);
      } else {
        dispatch(actionIndex.setToggleLoader(false));
        console.log(response);
      }
    } catch (error) {
      dispatch(actionIndex.setToggleLoader(false));
      console.log(error);
    }
  }

  return (
    <div className="form_outer">
      <form>
        <div className="first_form_row form_row">
          <div className="form_item">
            <label for="productName">Enter Products's name</label>
            <input
              placeholder="Enter products Name"
              type="text"
              name="productName"
              class="input"
              id="product_name_field"
            ></input>
          </div>
        </div>
        <div className="second_form_row form_row">
          <div className="form_item">
            <label>Select Products Category</label>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "15px" }}
                >
                  Product Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={productCategory}
                  label="Recurring cycle"
                  onChange={handleChange}
                >
                  <MenuItem value={"Home appliances"}>Home appliances</MenuItem>
                  <MenuItem value={"Household furniture"}>
                    Household furniture
                  </MenuItem>
                  <MenuItem value={"Clothing"}>Clothing</MenuItem>
                  <MenuItem value={"Groceries"}>Groceries</MenuItem>
                  <MenuItem value={"Electronics"}>Electronics</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="third_for_row form_row">
          <div className="form_item">
            <label for="mobileNumber">Enter Products Unit Price</label>
            <input
              placeholder="price"
              type="number"
              name="mobileNumber"
              class="input"
              id="product_price_field"
            ></input>
          </div>
        </div>
        <AlertDialog submitHandler={handleProductsForm} />
      </form>
    </div>
  );
}
export default DynamicFormForInvcoie;
