import { Box, Button, TextField, InputLabel, Input } from "@mui/material";
import { Formik, Field } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React,{useState} from 'react';
import axios from 'axios';

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  const [productData, setProductData] = useState([]);

  const handleFormSubmit = (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append('name', values.productName);
    formData.append('qty', values.productQty);
    formData.append('price', values.productPrice);
    formData.append('description', values.description);
    formData.append('image', values.image);
    
    axios({
      method:"POST",
      url:"/product/",
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response)=>{
      const newProduct=response.data;
      setProductData([...productData, newProduct]); // Corrected array concatenation
      console.log(response.data)
      alert("Product added successfully!");
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
      }
    })
  };

  return (
    <Box m="20px">
      <Header title="New Product" subtitle="Add new product" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}  encType="multipart/form-data">
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.productName}
                name="productName"
                error={!!touched.productName && !!errors.productName}
                helperText={touched.productName && errors.productName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.productQty}
                name="productQty"
                error={!!touched.productQty && !!errors.productQty}
                helperText={touched.productQty && errors.productQty}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="float"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.productPrice}
                name="productPrice"
                error={!!touched.productPrice && !!errors.productPrice}
                helperText={touched.productPrice && errors.productPrice}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={touched.description && errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <Box
                display="flex"
                justifyContent="start"
                alignItems="center"
                gridColumn="span 4"
                sx={{ gap: '58px' }}
              >
                <InputLabel htmlFor="image" sx={{ gridColumn: 'span 4' }}>
                  Image
                </InputLabel>
                <input
                  type="file"
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue('image',e.target.files[0]);
                  }}
                  id="Image"
                  name="image"
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="primary" variant="contained">
                Add New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  productName: yup.string().required('Product name is required'),
  productPrice: yup.number().required('Price is required').positive('Price must be a positive number'),
  productQty: yup.number().required('Quantity is required').integer('Quantity must be an integer'),
  description: yup.string().required('Description is required'),
  image: yup.mixed().required('Image is required'),
});
const initialValues = {
  name: '',
  qty: 0,
  price:0,
  description:'',
  image:null,
};

export default Form;
