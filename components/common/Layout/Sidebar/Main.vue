<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo border-none"
    :background-color="backgroudColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :collapse="isCollapsed"
    @open="handleOpen"
    @close="handleClose"
  >
    <div class="sy-2"></div>
    <el-menu-item index="1" @click="$router.push('/')">
      <slot name="header">
        Hello
      </slot>
    </el-menu-item>
    <div class="sy-2"></div>
    <component
      :is="child.children.length > 0 ? SubMenu : Item"
      v-for="(child, index) in sidebar"
      :key="child.title"
      :item="child"
      :count="index + 2 + ''"
    ></component>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
const sidebarTree = require('~/constants/base/config/sidebar.json')
export default {
  name: 'Sidebar',
  props: {
    backgroudColor: {
      type: String,
      default: '#FFFFFF',
    },
    textColor: {
      type: String,
      default: 'var(--color-dark)',
    },
    activeTextColor: {
      type: String,
      default: 'var(--color-primary)',
    },
  },
  data() {
    return {
      sidebar: sidebarTree.data,
    }
  },
  computed: {
    ...mapState({
      isCollapsed: (state) => state.options.sidebarCollapsed,
    }),
    SubMenu() {
      return () => import('./SubMenu.vue')
    },
    Item() {
      return () => import('./Item.vue')
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/base/layout/grid';
</style>
