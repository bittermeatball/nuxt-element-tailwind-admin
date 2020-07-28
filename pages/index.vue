<template>
  <el-main>
    <StatusRow :data="statusData" />
    <el-row class="mt-5 ml-4">
      <el-col :span="12">
        <DataTable
          title="Best employees of the month"
          :headers="bestEmployeeData.headers"
          :data="bestEmployeeData.data"
        />
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
  </el-main>
</template>
<script>
import { StatusRow } from '~/components/uncommon/Home'
import { DataTable } from '~/components/common'
//
// Fake data for example
const statusData = require('~/constants/base/status-row.json')
const bestEmployeeData = require('~/constants/base/best-employees.json')
export default {
  name: 'Home',
  components: {
    StatusRow,
    DataTable,
  },
  data() {
    return {
      statusData,
      bestEmployeeData,
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
