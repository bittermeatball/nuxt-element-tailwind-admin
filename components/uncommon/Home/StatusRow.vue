<template>
  <el-row>
    <el-col v-for="item in data" :key="item.title" :span="span">
      <StatusCard
        :title="item.title"
        :icon="item.icon"
        :data="item.data"
        :rate="item.rate"
        :class="['grid-content', 'mx-auto']"
      />
    </el-col>
  </el-row>
</template>
<script>
import { StatusCard } from '~/components/common'
export default {
  components: {
    StatusCard,
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {
            background: 'bg-gray-800',
            textColor: 'text-light',
            title: 'Status card 1',
            icon: 'el-icon-star-on',
            data: 100,
            rate: 3.14,
          },
          {
            background: 'bg-gray-800',
            textColor: 'text-light',
            title: 'Status card 2',
            icon: 'el-icon-star-on',
            data: 200,
            rate: -3,
          },
        ]
      },
    },
  },
  computed: {
    span() {
      return 24 / this.data.length
    },
  },
}
</script>
