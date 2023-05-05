<template>
    <div class="product-list">
      <h1>Điện thoại</h1>
      <div class="products">
        <div v-for="(product, index) in products" :key="index" class="product">
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
          </router-link>
          <p class="price">{{ product.price }} đ</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }
  
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    width: 200px;
  }
  
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }
  </style>
  