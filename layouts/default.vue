<template>
  <el-container class="default-layout-container h-full-vh">
    <el-aside class="default-layout-aside" width="250px">
      <Sidebar />
    </el-aside>
    <el-container class="flex-col">
      <!-- el-header -->
      <Navbar @signInDialogTrigger="dialogVisible = true" />
      <!-- el-main -->
      <nuxt class="relative" />
      <!-- el-dialog -->
      <Login :visible="dialogVisible" @onClose="dialogVisible = false" />
      <!-- el-footer -->
      <Footer />
    </el-container>
  </el-container>
</template>

<script>
import { mapMutations } from 'vuex'
import { Login, Navbar, Sidebar, Footer } from '~/components/common'
export default {
  components: {
    Login,
    Navbar,
    Footer,
    Sidebar,
  },
  data() {
    return {
      dialogVisible: false,
    }
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
  background-color: $gray-900;
}
</style>
