import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ProductTable from './ProductPageComponents/ProductTable'
import ProductForm from './ProductPageComponents/ProductForm'
import Modal from './ProductPageComponents/Modal'
import SearchBar from './ProductPageComponents/ProductSearchBar'
import { addProduct, adminProductList, updateProduct, deleteProduct, changeStatus } from '../../Services/product_service';
import {fetchCategories} from '../../Services/category_service';
import { Button } from '@mui/material'

function Product () {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);


  const fetchProducts = async () => {
    const response = await adminProductList();
    console.log(response);
    setProducts(response);
  };

  const getCategories = async () => {
    const response = await fetchCategories();
    console.log(response);
    setCategories(response);
  };


  // const handleSearch = async (query) => {
  //   if (query) {
  //     const response = await searchProducts(query);
  //     setProducts(response.data);
  //   } else {
  //     fetchProducts();
  //   }
  // };

  const handleAdd = async (product) => {
    if (selectedProduct) await updateProduct(product);
    else await addProduct(product);
    fetchProducts();
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const handleStatusToggle = async (id, status) => {
    let obj = {"id": id, "status":status};
    await changeStatus(obj)
    console.log(obj.status)
    fetchProducts()
  };

  const handleAddProductClick = () => {
    setSelectedProduct(null); 
    setModalOpen(true);
  };

  useEffect(() => {
    fetchProducts();
    getCategories();
  }, []);

  return (
    <div className='product admin-page'>
      {/* <Navbar/> */}
      <div style={{ padding: '20px'}}>
      <h1 style={{ textAlign: 'center' }}>Manage Products</h1>
      
      {/* <div className='top_div'><SearchBar id='searchbar' style={{ padding: '200px' }} onSearch={handleSearch} /> */}
      <div className='top_div'><SearchBar id='searchbar' style={{ padding: '200px' }} />
      
      <Button style={{height:'55px'}} variant="contained" color="primary" onClick={handleAddProductClick}>

        Add Product
      </Button> </div>
      
      <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} onStatusToggle={handleStatusToggle}/>
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        {/* {fetchCategories()} */}
      <ProductForm onSave={handleAdd} selectedProduct={selectedProduct} categories={categories} />
      </Modal>
    </div>
    </div>
  )
}

export default Product