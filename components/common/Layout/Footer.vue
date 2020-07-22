<template>
  <el-footer class="default-footer text-white">
    <p style="line-height: 60px;">
      {{ $t('home.footer') }}
    </p>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
<style lang="scss" scoped>
.default-footer {
  background-color: $gray-800;
}
</style>
