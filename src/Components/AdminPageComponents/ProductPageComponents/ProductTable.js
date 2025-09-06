import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Switch,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { uploadGlbFile } from "../../../Services/product_service"; // ✅ import service

const ProductTable = ({
  products,
  onEdit,
  onDelete,
  onStatusToggle,
  onRefresh,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [glbFile, setGlbFile] = useState(null);

  const handleOpenModal = (productId) => {
    setSelectedProductId(productId);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setGlbFile(null);
  };

  const handleUpload = async () => {
    if (!glbFile || !selectedProductId) return;

    try {
      await uploadGlbFile(selectedProductId, glbFile); // ✅ use service method
      handleCloseModal();
      if (onRefresh) onRefresh(); // refresh product list after upload
    } catch (error) {
      console.error("Error uploading GLB:", error);
    }
  };

  return (
    <>
      <Table>
        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>In Stock</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>3D Image</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
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
                  checked={product.status === "true"}
                  onChange={() =>
                    onStatusToggle(
                      product.id,
                      product.status === "true" ? false : true
                    )
                  }
                  color="primary"
                />
              </TableCell>
              <TableCell>
                {product.hasImage3D ? "Yes" : "No"}
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handleOpenModal(product.id)}
                  sx={{ ml: 1 }}
                >
                  Upload GLB
                </Button>
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

      {/* ✅ Upload Modal */}
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Upload GLB File</DialogTitle>
        <DialogContent>
          <input
            type="file"
            accept=".glb"
            onChange={(e) => setGlbFile(e.target.files[0])}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleUpload} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductTable;
