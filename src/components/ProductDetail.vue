<template>
    <div class="product-detail">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p class="product-price">{{ product.price }}</p>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-category">{{ product.category }}</p>
      </div>
    </div>
  </template>
  <script>
    import axios from 'axios'

  export default {
    name: "ProductDetail",
    data() {
      return {
        product: {}
      };
    },
    mounted() {
      // Lấy thông tin sản phẩm từ API dựa trên ID được truyền vào từ đường dẫn
      const productId = this.$route.params.id;
      axios.get(`/api/products/${productId}`).then(response => {
        this.product = response.data;
      });
    }
  };
  </script>
  
  <style scoped>
  .product-detail {
    display: flex;
    margin-top: 50px;
    padding: 20px;
  }
  
  .product-image {
    margin-right: 50px;
  }
  
  .product-info {
    flex-grow: 1;
  }
  
  .product-price {
    font-weight: bold;
    margin-top: 20px;
  }
  
  .product-category {
    margin-top: 20px;
  }
  </style>
  