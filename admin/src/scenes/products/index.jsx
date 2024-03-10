import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProduct } from "../../data/mockData"; // Importing mockDataProduct
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Form from "../form";
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react"
import axios from "axios";
import Button from '@mui/material/Button'; // Import Button component from MUI

const Products = () => {
  const theme = useTheme(); // Access theme
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "Product Id" },
    {
      field: "name",
      headerName: "Product Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "type",
      headerName: "Category",
      flex: 1,
    },
    
    {
      field: "price",
      headerName: "Rate",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "qty",
      headerName: "Quantity",
      flex: 1,
    },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 1,
    // },
    // {
    //   field: "accessLevel",
    //   headerName: "Update",
    //   flex: 1,
    //   renderCell: ({ row }) => {
    //     return (
    //       <Box display="flex" justifyContent="space-between">
    //         <Button
    //           variant="contained"
    //           color="primary" 
    //           onClick={() => handleAdd(row.id)}
    //           sx={{ marginRight: '20px' }} 
    //           style={{ backgroundColor: '#e3f2fd' , color:'black'}} 
    //         >
    //           Add
    //         </Button>
    //         <Button
    //           variant="contained"
    //           color="error" // Use error color for "Remove" button
    //           onClick={() => handleRemove(row.id)}
    //         >
    //           Remove
    //         </Button>
    //       </Box>
    //     );
    //   },
    // },
  ];

  // const handleAdd = (id) => {
  //   // Handle add functionality
  //   console.log(`Add product with id ${id}`);
  // };

  // const handleRemove = (id) => {
  //   // Handle remove functionality
  //   console.log(`Remove product with id ${id}`);
  // };
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   // Make an Axios GET request to fetch employee data from the backend
      //   const response = await axios.get('http://127.0.0.1:8000/employee/');
      //   // Assuming your backend returns an array of employee data
      //   setEmployeeData(response.data);
      // } catch (error) {
      //   console.error('Error fetching employee data:', error);
      // }
      axios({
        method: "GET",
        url:"/product/",
      }).then((response)=>{
        const data = response.data
        setProductData(data)

      })
  .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          }
      })
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Products" subtitle={<span style={{ color: '#c76832' }}>Product Details</span>} />
        <Button 
          variant="contained" 
          color="primary" 
          style={{ 
            padding: '10px 20px', 
            color: 'white', 
            backgroundColor: '#f79752',
            borderRadius: '20px', // Adjust the value to control the curve
          }}
          onClick={() => navigate('/form')}
        >
          Add New Product
        </Button>


      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[400],
            fontSize:"12px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: '#f79752',
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: '#f79752',
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataProduct} columns={columns} />
      </Box>
    </Box>
  );
};

export default Products;
