<template>
  <el-card shadow="always" :style="{ width: '280px' }">
    <slot>
      <div class="flex flex-row">
        <div>
          <i :class="[icon, 'text-6xl']"></i>
        </div>
        <div class="w-full">
          <h6 class="font-bold text-xl text-right">
            {{ title }}
          </h6>
          <p class="text-xl text-right">
            {{ data }}
          </p>
        </div>
      </div>
    </slot>
  </el-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Status card',
    },
    icon: {
      type: String,
      default: 'el-icon-star-on',
    },
    data: {
      type: Number,
      default: 0,
    },
  },
}
</script>
