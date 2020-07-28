<template>
  <el-main>
    <StatusRow :data="statusData" />
    <el-row class="mt-7 mx-0" :gutter="30">
      <el-col :span="12" class="grid-content">
        <DataTable
          title="Best employees of the month"
          :headers="bestEmployeeData.headers"
          :data="bestEmployeeData.data"
        />
      </el-col>
      <el-col :span="12" class="grid-content">
        <el-card shadow="always">
          <div slot="header" class="clearfix">
            <span class="font-bold">Biểu đồ mẫu</span>
          </div>
          <LineChart :data="chartdata" :options="chartOptions" />
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
import { StatusRow } from '~/components/uncommon/Home'
import { DataTable, LineChart } from '~/components/common'

//
// Fake data for example
const statusData = require('~/constants/base/status-row.json')
const bestEmployeeData = require('~/constants/base/best-employees.json')
export default {
  name: 'Home',
  components: {
    StatusRow,
    DataTable,
    LineChart,
  },
  data() {
    return {
      statusData,
      bestEmployeeData,
      chartdata: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
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
