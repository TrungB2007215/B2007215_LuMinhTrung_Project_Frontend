<template>
  <div class="home">
    <h1>Click mua</h1>
    <nav>
      <ul>
        <li><router-link to="/">Trang chủ</router-link></li>
        <li>
          <input type="text" v-model="searchTerm" placeholder="Search">
          <button @click="searchProducts">Tìm kiếm</button>
        </li>
        <li v-if="user">
          <button @click="logout">Đăng xuất</button>
        </li>
        <li v-else>
          <router-link to="/login">Đăng nhập</router-link>
          <router-link to="/register">Đăng ký</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="prevPage">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
    </div>
    <product-list :products="displayedProducts"></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import { mapState, mapGetters, mapActions } from 'vuex';
import store from '../store';
export default {
  components: { ProductList },
  computed: {
    ...mapState(['products', 'currentPage', 'totalPages', 'pageSize']),
    ...mapGetters(['displayedProducts']),
    user() {
      return this.$store.state.user;
    }
  },
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'logout']),
    nextPage() {
      this.$router.push({ query: { page: this.currentPage + 1 } });
      this.fetchProducts();
    },
    prevPage() {
      this.$router.push({ query: { page: this.currentPage - 1 } });
      this.fetchProducts();
    },
    searchProducts() {
      // Redirect to search page with search term passed as query parameter
      this.$router.push({ path: '/search', query: { q: this.searchTerm } })
    }
  },
  created() {
    this.fetchProducts();
  },
  store // Thêm store vào đây
};

</script>
