<template>
    <div class="register">
      <h2>Đăng ký</h2>
      <form @submit.prevent="register">
        <div>
          <label>Email</label>
          <input type="email" v-model.trim="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" v-model.trim="password" required />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" v-model.trim="confirmPassword" required />
        </div>
        <div>
          <button type="submit">Đăng ký</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      async register() {
        try {
          const response = await axios.post("/api/user/register", {
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
          });
          console.log(response.data);
          this.$router.push("/login");
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register {
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
    vertical-align: left;
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
  