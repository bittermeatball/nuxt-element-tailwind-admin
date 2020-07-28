<template>
  <el-footer
    :style="customStyle"
    class="default-footer bg-gray-800 text-white"
    height="40px"
  >
    <p style="line-height: 40px;">
      {{ $t('footer') }}
    </p>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    customStyle: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
