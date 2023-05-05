<template>
    <div class="container mt-3">
      <h3>Thêm sản phẩm</h3>
      <form @submit.prevent="addProduct" class = "form-container">
        <div class="form-group">
          <label for="name">Tên:</label>
          <input type="text" class="form-control" id="name" v-model="product.name">
        </div>
        <div class="form-group">
          <label for="price">Giá:</label>
          <input type="number" class="form-control" id="price" v-model="product.price">
        </div>
        <div class="form-group">
          <label for="description">Thông số kĩ thuật:</label>
          <textarea class="form-control" id="description" rows="5" v-model="product.description"></textarea>
        </div>
        <div class="form-group">
          <label for="category">Thương hiệu:</label>
          <select class="form-control" id="category" v-model="product.category">
            <option v-for="category in categories" :value="category">{{ category }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="image">Ảnh:</label>
          <input type="file" class="form-control" id="image" v-on:change="onFileChange">
        </div>
        <button type="submit" class="btn btn-primary">Thêm</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        product: {
        },
        categories: ['Apple', 'Samsung', 'Oppo', 'Vivo', 'Realme', 'Xiaomi'],
      };
    },

    methods: {
      onFileChange(event) {
      this.product.image = event.target.files[0];
      },
      async addProduct() {
        await axios.post('/api/admin/products', this.product);
        this.$router.push('/admin/products');
      },
    },
  };
  </script>
  
  <style scoped>
  .container mt-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
  .title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;
  }
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
.form-container {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"], input[type="number"], select, textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0069d9;
}
</style>
