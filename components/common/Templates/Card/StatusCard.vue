<template>
  <el-card
    shadow="hover"
    :style="{ width: '280px' }"
    class="rounded-lg cursor-pointer border-0"
  >
    <div class="flex flex-row">
      <div class="w-full">
        <h6 class="text-md text-secondary">
          {{ title }}
        </h6>
        <p class="text-xl font-bold text-primary-800">
          {{ data }}
        </p>
      </div>
      <div>
        <div class="p-3 status-card-icon-bg leading-none">
          <i :class="[icon, 'text-xl']"></i>
        </div>
      </div>
    </div>
    <div class="mt-1">
      <span :class="{ 'text-success': rate > 0, 'text-danger': rate < 0 }">
        <i :class="{ 'el-icon-top': rate > 0, 'el-icon-bottom': rate < 0 }"></i>
        {{ Math.abs(rate) }}%
      </span>
      <span class="ml-1 font-hairline">{{
        $t('components.card.status.since-last-month')
      }}</span>
    </div>
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
    rate: {
      type: Number,
      default: 3.48,
    },
  },
}
</script>
<style lang="scss" scoped>
.status-card-icon-bg {
  color: white;
  background-image: linear-gradient(
    to right,
    var(--color-danger),
    var(--color-warning)
  );
  border-radius: 50px;
}
</style>
