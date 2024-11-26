import React, { useState, useEffect } from 'react';
import { TextField, Button, Stack,Box, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const ProductForm = ({ onSave, selectedProduct, categories }) => {
  const [product, setProduct] = useState({
    name: '',
    categoryId: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      setProduct({
        name: '',
        categoryId: '',
        description: '',
        price: '',
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <Stack spacing={2} paddingTop={1}>
        <Box display="flex" gap={2}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth >
            <InputLabel id="category-label"  style={{ backgroundColor: 'white', padding: '0 4px' }}>Category *</InputLabel>
            <Select style={{border: 'transparent'}}
              labelId="category-label"
              name="categoryId"
              value={product.categoryId}
              onChange={handleChange}
              required
            >
              {categories.map((category, index) => (
                <MenuItem key={index} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*',title: 'Price can only be numeric.', }}
          required
        />
      
        <Button type="submit" variant="contained" color="primary">
          {selectedProduct ? 'Update' : 'Add'} Product
        </Button>
      </Stack>
    </form>
  );
};

export default ProductForm;
