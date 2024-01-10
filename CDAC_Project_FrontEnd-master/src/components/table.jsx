import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../assets/styles/Table/table.css";
import Chip from "@mui/material/Chip";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import actionIndex from "../features/actionIndex";

function createData(
  invoice_id,
  status,
  recurring_cycle,
  client,
  issue_date,
  due_date,
  total,
  paid,
  due
) {
  return {
    invoice_id,
    status,
    recurring_cycle,
    client,
    issue_date,
    due_date,
    total,
    paid,
    due,
  };
}

const rows = [
  createData(
    1,
    "paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "partially paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "overdue",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "unpaid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "partially paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "overdue",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "partially paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
];

const paymentRow = [
  {
    payment_id: 181,
    client_id: 1,
    client_name: "Client1",
    invoice_id: 3,
    payment_method: "online",
    issue_date: "12-8-23",
    payment_amount: 70000,
    payment_note: "note the firts installment",
  },
  {
    payment_id: 181,
    client_id: 1,
    client_name: "Client1",
    invoice_id: 3,
    payment_method: "cash",
    issue_date: "12-8-23",
    payment_amount: 70000,
    payment_note: "note the firts installment",
  },
  {
    payment_id: 181,
    client_id: 1,
    client_name: "Client1",
    invoice_id: 3,
    payment_method: "online",
    issue_date: "12-8-23",
    payment_amount: 70000,
    payment_note: "note the firts installment",
  },
  {
    payment_id: 181,
    client_id: 1,
    client_name: "Client1",
    invoice_id: 3,
    payment_method: "Cash",
    issue_date: "12-8-23",
    payment_amount: 70000,
    payment_note: "note the firts installment",
  },

  {
    payment_id: 181,
    client_id: 1,
    client_name: "Client1",
    invoice_id: 3,
    payment_method: "cash",
    issue_date: "12-8-23",
    payment_amount: 70000,
    payment_note: "note the firts installment",
  },
  {
    payment_id: 181,
    client_id: 1,
    client_name: "Client1",
    invoice_id: 3,
    payment_method: "online",
    issue_date: "12-8-23",
    payment_amount: 70000,
  },
  {
    payment_id: 181,
    client_id: 1,
    client_name: "Client1",
    invoice_id: 3,
    payment_method: "online",
    issue_date: "12-8-23",
    payment_amount: 70000,
    payment_note: "note the firts installment",
  },
  {
    payment_id: 181,
    client_id: 1,
    client_name: "Client1",
    invoice_id: 3,
    payment_method: "online",
    issue_date: "12-8-23",
    payment_amount: 70000,
  },
];

export default function InvoiceDenseTable() {
  const invoices = useSelector((state) => state.invoice.value);
  return (
    <TableContainer component={Paper} style={{ marginTop: "30px" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Invoice number</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Recurring Cycle</TableCell>
            <TableCell align="right">Client</TableCell>
            <TableCell align="right">Issue date</TableCell>
            <TableCell align="right">Due date</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Paid</TableCell>
            <TableCell align="right">Due</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.length > 0
            ? invoices.map((row) => (
                <TableRow
                  key={row.invoice_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.invoice_id}
                  </TableCell>
                  <TableCell align="right">
                    {row.status == "paid" ? (
                      <Chip label=" Paid " color="success" />
                    ) : row.status == "partially paid" ? (
                      <Chip label=" Partially Paid " color="primary" />
                    ) : row.status == "unpaid" ? (
                      <Chip label=" Unpaid " color="default" />
                    ) : (
                      <Chip label=" Overdue " color="warning" />
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {row.invoice_recurring_cycle}
                  </TableCell>
                  <TableCell align="right">{row.client_name}</TableCell>
                  <TableCell align="right">{row.issue_date}</TableCell>
                  <TableCell align="right">{row.due_date}</TableCell>
                  <TableCell align="right" className="currancy_table">
                    {row.amount_total}.Rs
                  </TableCell>
                  <TableCell align="right" className="currancy_table">
                    {row.amount_paid}.Rs
                  </TableCell>
                  <TableCell align="right" className="currancy_table">
                    {row.amount_due}.Rs
                  </TableCell>
                  <TableCell align="right" className="currancy_table">
                    <MenuIcon />
                  </TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function ClientTable(params) {
  const clientRow = useSelector((states) => states.client.value);
  return (
    <TableContainer component={Paper} style={{ marginTop: "30px" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Client No</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Postal Code</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientRow.length > 0
            ? clientRow.map((row) => (
                <TableRow
                  key={row.client_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.client_name}
                  </TableCell>
                  <TableCell align="right">{row.client_id}</TableCell>
                  <TableCell align="right">{row.client_email}</TableCell>

                  <TableCell align="right">
                    {row.status == "paid" ? (
                      <Chip label=" Paid " color="success" />
                    ) : row.status == "partially paid" ? (
                      <Chip label=" Partially Paid " color="primary" />
                    ) : row.status == "unpaid" ? (
                      <Chip label=" Unpaid " color="default" />
                    ) : row.status == "Overdue" ? (
                      <Chip label=" Overdue " color="warning" />
                    ) : (
                      <Chip label=" Active " color="success" />
                    )}
                  </TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right" className="currancy_table">
                    {row.state}
                  </TableCell>
                  <TableCell align="right" className="currancy_table">
                    {row.city}
                  </TableCell>
                  <TableCell align="right" className="currancy_table">
                    {row.country}
                  </TableCell>
                  <TableCell align="right" className="currancy_table">
                    {row.postal_code}
                  </TableCell>
                  <TableCell align="right" className="currancy_table">
                    <MenuIcon />
                  </TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export function PaymentsTable(params) {
  const paymentRow = useSelector((states) => states.payment.value);
  return (
    <TableContainer component={Paper} style={{ marginTop: "30px" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Invoice Number</TableCell>
            <TableCell align="right">Client</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Payment Method</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Note</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentRow.length > 0
            ? paymentRow.map((row) => (
                <TableRow
                  key={row.payment_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row?.invoice_id?.invoice_id}
                  </TableCell>
                  <TableCell align="right">{row.client_name}</TableCell>
                  <TableCell align="right">{row.issue_date}</TableCell>

                  <TableCell align="right">{row.payment_method}</TableCell>
                  <TableCell align="right">{row.payment_amount}</TableCell>
                  <TableCell align="right">{row?.payment_note}</TableCell>
                  <TableCell align="right">
                    <MenuIcon />
                  </TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export function ProductsTable(params) {
  const productRow = useSelector((states) => states.product.value);
  return (
    <TableContainer component={Paper} style={{ marginTop: "30px" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productRow.length > 0
            ? productRow.map((row) => (
                <TableRow
                  key={row.product_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.product_name}
                  </TableCell>
                  <TableCell align="right">{row.product_category}</TableCell>
                  <TableCell align="right">{row.product_image}</TableCell>
                  <TableCell align="right">{row.product_price}</TableCell>
                  <TableCell align="right">
                    <MenuIcon />
                  </TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
