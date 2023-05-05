<template>
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Thông số kĩ thuật</th>
            <th>Thương hiệu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td><img :src="product.image" alt="Product Image" height="100" width="100"></td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.category }}</td>
            <td><router-link :to="'/admin/products/edit/' + product.id">Hiệu chỉnh</router-link></td>
            <td><button @click="deleteProduct(product.id)">Xóa</button></td>
          </tr>
        </tbody>
      </table>
      <router-link to="/admin/products/add">Thêm</router-link>
    </div>
  </template>
  
  <script>

import axios from 'axios'

 export default {
  name: 'ProductList',
  data() {
    return {
      products: []
    }
  },
  methods: {
    async fetchProducts() {
      const response = await axios.get('/api/products')
      this.products = response.data
    },
    async deleteProduct(id) {
      if (confirm('Are you sure you want to delete this product?')) {
        await axios.delete(`/api/admin/products/${id}`)
        this.products = this.products.filter(p => p.id !== id)
      }
    }
  },
  created() {
    this.fetchProducts()
  }
}
</script>