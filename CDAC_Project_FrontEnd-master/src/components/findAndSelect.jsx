import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import "../assets/styles/FindAndSelect/findAndSelect.css";
import { searchClientByName } from "../service/clients";
import { searchProducts } from "../service/products";
import { Children, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function FindAndSelect(props) {
  const [currentSearchClients, setcurrentSearchClients] = useState([]);
  const [currentSearchProducts, setcurrentSearchProducts] = useState([]);

  //searching for clients
  async function searchString(str) {
    console.log(str)
    if (str == "") {
      setcurrentSearchClients([]);
      setcurrentSearchProducts([]);
      return;
    }
    console.log(currentSearchClients);
    try {
      if (props.searchFor == 1) {
        console.log("asd")
        const data = await searchClientByName(
          JSON.parse(localStorage.getItem("admin")).admin_id,
          str
        );
        console.log(data);
        if (data?.length > 5) {
          setcurrentSearchClients(data.slice(4));
        } else if (data?.length < 5) {
          setcurrentSearchClients(data);
          console.log("search result for client=====>", data);
        }
      }
      else if (props.searchFor == 2) {
        console.log("hit")
        const data = await searchProducts(str);
        console.log(data);
        if (data?.length > 5) {
          setcurrentSearchProducts(data.slice(4));
        } else if (data?.length < 5) {
          setcurrentSearchProducts(data);
          console.log("search result for products=====>", data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  //selecting the current item

  function selectCurrentItem(index) {
    if (props.searchFor == 1) {
      props.selectHandler(currentSearchClients[index]);
      setcurrentSearchClients([]);
    } else if (props.searchFor == 2) {
      console.log(props.products)
      props.selectHandler([...props.products,currentSearchProducts[index]]);
      setcurrentSearchProducts([]);
    }
  }
  return (
    <>
      <div class="group">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search"
          type="search"
          class="input"
          onChange={(e) => searchString(e.target.value)}
        />
      </div>
      <div className="client_result_container">
        <List className="client_item" style={{ width: "600px" }}>
          {props.searchFor==1 && currentSearchClients.length
            ? currentSearchClients.map((item, index) => {
                return (
                  <ListItem onClick={() => selectCurrentItem(index)}>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item?.client_name}
                      secondary={item?.city}
                    />
                  </ListItem>
                );
              })
            : ""}
            {props.searchFor==2 && currentSearchProducts.length
            ? currentSearchProducts.map((item, index) => {
                return (
                  <ListItem onClick={() => selectCurrentItem(index)}>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item?.product_name}
                      secondary={item?.product_price}
                    />
                  </ListItem>
                );
              })
            : ""}

        </List>
      </div>
    </>
  );
}
