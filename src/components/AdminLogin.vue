<template>
    <div class="login-container">
      <h1 class="title">Admin đăng nhập</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </template>

  <script>
  import axios from 'axios'
 
  export default {
    data() {
      return {
        email: "",
        password: "",
        error: "",
      };
    },
    methods: {
        login() {
            // Get the email and password from the form
            const email = this.email;
            const password = this.password;

            // Send a POST request to the API with the email and password
            axios.post('/api/admin/login', { email, password })
            .then(response => {
                // If authentication succeeds, redirect to the admin dashboard
                this.$router.push('/admin/products');
            })
            .catch(error => {
                // If authentication fails, display error message
                this.errorMessage = 'Invalid email or password';
            });
        },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
  
  .title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
  }
  
  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  input {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
  }
  
  button[type="submit"] {
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  button[type="submit"]:hover {
    background-color: #0069d9;
  }
  
  .error {
    color: red;
    margin-top: 1rem;
  }
  </style>
  