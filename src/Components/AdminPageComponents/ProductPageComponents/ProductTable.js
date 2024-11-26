import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton, Switch } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ProductTable = ({ products, onEdit, onDelete, onStatusToggle }) => {

  return (
    <Table >
      <TableHead sx={{  backgroundColor: '#f5f5f5' }}>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>In Stock</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.categoryName}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <Switch
                
                checked={product.status==="true"}
                onChange={() => onStatusToggle(product.id, (product.status === "true"?false:true))}
                color="primary"
              />
            </TableCell>
            <TableCell>
              <IconButton onClick={() => onEdit(product)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => onDelete(product.id)}>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
