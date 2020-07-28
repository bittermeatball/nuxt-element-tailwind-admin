<template>
  <el-container class="default-layout-container h-full-vh">
    <el-aside
      class="default-layout-aside bg-gray-900"
      :width="sidebarCollapsed ? '65px' : '250px'"
    >
      <Sidebar active-text-color="var(--color-primary)">
        <template v-slot:header>
          <img
            src="~/assets/img/logo-md.png"
            style="width: 30px;"
            class="m-0 inline"
          />
          <span class="text-white text-xl ml-5 tracking-wider font-ample">
            Nestsera Tech
          </span>
        </template>
      </Sidebar>
    </el-aside>
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
import { mapMutations, mapState } from 'vuex'
import { Login, Navbar, Sidebar, Footer } from '~/components/common'
export default {
  middleware: ['authRequired'],
  components: {
    Login,
    Navbar,
    Footer,
    Sidebar,
  },
  computed: {
    ...mapState({
      sidebarCollapsed: (state) => state.options.sidebarCollapsed,
    }),
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
