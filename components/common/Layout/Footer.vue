<template>
  <el-footer
    :style="customStyle"
    class="default-footer text-white"
    height="30px"
  >
    <small>
      <p style="line-height: 30px;">
        {{ $t('footer') }}
      </p>
    </small>
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
