<template>
  <el-main>
    <StatusRow :data="statusData" />
    <el-row class="mt-7 mx-0" :gutter="30">
      <el-col :span="12" class="grid-content">
        <LineChart
          title="Biểu đồ mẫu"
          :data="chartdata"
          :options="chartOptions"
          class="dashboard-chart bg-theme-2 border-0 rounded-lg"
        />
      </el-col>
      <el-col :span="12" class="grid-content">
        <DataTable
          title="Best employees of the month"
          :headers="bestEmployeeData.headers"
          :data="bestEmployeeData.data"
        />
      </el-col>
    </el-row>
    <div class="sy-5"></div>
  </el-main>
</template>
<script>
import { StatusRow } from '~/components/uncommon/Home'
import { DataTable, LineChart } from '~/components/common'
//
// Fake data for example
const statusData = require('~/constants/base/examples/status-row.json')
const bestEmployeeData = require('~/constants/base/examples/best-employees.json')
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
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#2DCE89',
            data: [40, 20, 30],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: 'white',
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: 'white',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: 'white',
              },
            },
          ],
        },
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
@import '~assets/scss/base/layout/grid';
@import '~assets/scss/base/utilities/mixins';
.random-class {
  color: var(--color-primary);
}
.random-text-using-mixin {
  @include centerAbsolute('both');
}
.dashboard-chart {
  .el-card__header {
    border: none;
    color: white;
  }
}
</style>
