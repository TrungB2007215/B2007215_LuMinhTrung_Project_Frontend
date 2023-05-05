<template>
    <div>
      <h1>Kết quả tìm kiếm cho "{{ $route.query.q }}"</h1>
      <ul>
        <li v-for="product in filteredProducts" :key="product.id">
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">{{ product.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters(['products']),
      filteredProducts() {
        // Lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm
        return this.products.filter(product => product.name.toLowerCase().includes(this.$route.query.q.toLowerCase()))
      }
    }
  }
  </script>
  