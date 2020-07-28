<template>
  <el-container class="default-layout-container h-full-vh">
    <el-container class="flex-col">
      <!-- el-header -->
      <Navbar />
      <!-- el-main -->
      <nuxt class="relative" />
      <!-- el-dialog -->
      <Login />
      <!-- el-footer -->
      <Footer />
    </el-container>
  </el-container>
</template>

<script>
import { mapMutations } from 'vuex'
import { Footer } from '~/components/common'
export default {
  layout: 'unauth',
  components: {
    Footer,
  },
  created() {
    // We store this configuration in localStorage because it lasts forever
    this.$i18n.locale = localStorage.getItem('locale')
    this.SET_LANG(localStorage.getItem('locale')) // store in state and localStorage
  },
  methods: {
    ...mapMutations({
      SET_LANG: 'SET_LANG',
    }),
  },
}
</script>
<style lang="scss" scoped>
.default-layout-aside {
  transition-duration: 0.3s;
}
</style>
