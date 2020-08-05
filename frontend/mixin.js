export const logout = {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ path: "/" });
    }
  }
};
