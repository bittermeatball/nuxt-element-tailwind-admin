<template>
  <el-card shadow="always" class="border-0 rounded-lg w-full">
    <div class="mb-5">
      <h3 class="font-bold text-gray-600 inline-block">
        {{ title }}
      </h3>
      <el-button
        size="mini"
        icon="el-icon-refresh"
        circle
        class="ml-1 select-none"
        @click="refresh"
      >
      </el-button>
      <el-select
        v-model="query.limit"
        size="mini"
        class="float-right select-none"
        style="width: 80px;"
        @change="onLimitChange"
      >
        <el-option
          v-for="paginateLimit in [10, 25, 50]"
          :key="'paginate-limit-' + paginateLimit"
          :label="paginateLimit"
          :value="paginateLimit"
          class="select-none"
        >
        </el-option>
      </el-select>
      <el-input
        v-model="query.search"
        size="mini"
        class="float-right mx-3"
        style="width: 120px;"
        :placeholder="$t('components.table.data.search')"
        @keyup.enter.native="onSearch"
      ></el-input>
      <el-button
        class="float-right select-none"
        type="primary"
        size="mini"
        icon="el-icon-search"
        circle
        @click="onSearch"
      >
      </el-button>
    </div>
    <hr />
    <el-table
      v-loading="$fetchState.pending"
      class="w-full"
      :height="height"
      :data="tableData"
      @selection-change="handleSelectionChange"
      @sort-change="handleSortChange"
    >
      <el-table-column type="selection" width="55" class="select-none" />
      <slot></slot>
      <el-table-column width="40" align="right">
        <template slot-scope="scope">
          <el-dropdown trigger="click" @command="handleActionCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-more-outline"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="action in actions"
                :key="`${action.name}:${scope.$index}`"
                :command="`${action.name}:${scope.$index}`"
              >
                {{ $t(action.label) }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      class="my-5 float-right select-none"
      @size-change="onSizeChange"
      @current-change="onPageChange"
      @prev-click="onPagePrev"
      @next-click="onPageNext"
    />
    <div></div>
  </el-card>
</template>
<script>
const queryString = require('query-string')
export default {
  props: {
    height: {
      type: Number,
      default: 400,
    },
    endpoint: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default() {
        return this.$t('components.table.data.title')
      },
    },
    extraQuery: {
      type: Object,
      default() {
        return {}
      },
    },
    actions: {
      type: Array,
      default() {
        return [
          {
            name: 'edit',
            label: 'components.table.data.edit',
          },
          {
            name: 'delete',
            label: 'components.table.data.delete',
          },
        ]
      },
    },
  },
  async fetch() {
    const response = await this.$axios.get(
      `${this.endpoint}?` +
        queryString.stringify({ ...this.query, ...this.extraQuery })
    )
    this.tableData = response.data
  },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      total: 50, // Modify this later
      query: {
        page: 1,
        limit: 10,
        search: '',
        sortBy: '',
        order: '',
      },
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.$emit('onSelectionChange', val)
    },
    handleSortChange({ prop, order }) {
      this.query.sortBy = prop
      this.query.order = order === 'descending' ? 'desc' : 'asc'
      this.$fetch()
      this.$emit('onSortChange', { prop, order })
    },
    handleActionCommand(command) {
      const actionHandler = command.split(':')
      this.$emit('on-' + actionHandler[0], actionHandler[1])
    },
    onSizeChange(total) {
      this.$emit('onSizeChange', total)
    },
    async refresh() {
      this.query = await {
        page: 1,
        limit: 10,
        search: '',
      }
      this.$fetch()
      this.$emit('onRefresh')
    },
    onSearch() {
      this.$fetch()
      this.$emit('onPageChange', this.query.search)
    },
    onLimitChange() {
      this.$fetch()
      this.$emit('onPageChange', this.query.limit)
    },
    async onPageChange(currentPage) {
      this.query.page = await currentPage
      this.$fetch()
      this.$emit('onPageChange', currentPage)
    },
    async onPagePrev(currentPage) {
      this.query.page = await currentPage
      this.$fetch()
      this.$emit('onPagePrev', currentPage)
    },
    async onPageNext(currentPage) {
      this.query.page = await currentPage
      this.$fetch()
      this.$emit('onPageNext', currentPage)
    },
  },
}
</script>
