<template>
  <el-main>
    <StatusRow :data="statusData" />
  </el-main>
</template>
<script>
import { StatusRow } from '~/components/uncommon/Home'
const statusData = require('~/constants/base/status-row.json')
export default {
  name: 'Home',
  components: {
    StatusRow,
  },
  data() {
    return {
      statusData,
    }
  },
  created() {
    this.fetchStatusRow()
  },
  methods: {
    fetchStatusRow() {
      const newData = {
        background: 'bg-cyan',
        textColor: 'text-danger',
        title: 'New custom card',
        icon: 'el-icon-star-off',
        data: 300,
      }
      // Merge with old data
      this.statusData[0] = {
        ...this.statusData[0],
        ...newData,
      }
    },
  },
  head() {
    return {
      title: this.$t('title.dashboard'),
    }
  },
}
</script>
<style lang="scss">
@import '~/assets/scss/base/utilities/_mixins';
.random-class {
  color: var(--color-primary);
}
.random-text-using-mixin {
  @include centerAbsolute('both');
}
</style>
