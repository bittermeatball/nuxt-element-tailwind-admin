<template>
  <el-dialog :id="id" :visible.sync="dialogVisible" :title="title">
    <slot></slot>
  </el-dialog>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Dialog title',
    },
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  created() {
    this.$root.$on('el:show:dialog', (id) => {
      this.dialogVisible = id === this.id ?? true
    })
    this.$root.$on('el:hide:dialog', (id) => {
      this.dialogVisible = id === this.id ?? false
    })
  },
}
</script>
