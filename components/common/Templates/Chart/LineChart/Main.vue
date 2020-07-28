<template>
  <el-card shadow="always">
    <div slot="header" class="clearfix border-0">
      <span class="font-bold">{{ title }}</span>
    </div>
    <LineChart :data="data" :options="options" />
  </el-card>
</template>
<script>
import LineChart from './LineChart'
export default {
  components: {
    LineChart,
  },
  props: {
    title: {
      type: String,
      default: 'Some cool chart',
      required: true,
    },
    data: {
      type: Object,
      default: null,
      required: true,
    },
    options: {
      type: Object,
      default: null,
      required: true,
    },
  },
}
</script>
