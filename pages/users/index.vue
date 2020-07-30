<template>
  <el-main>
    <el-container class="p-3">
      <el-row class="w-full">
        <!-- Title -->
        <h1 class="text-xl font-bold text-light inline-block mr-3">
          {{ $t('users.title') }}
        </h1>
        <!-- Breadcrumb -->
        <div class="inline-block text-light select-none">
          <nuxt-link to="/">
            <fa :icon="['fas', 'home']" />
          </nuxt-link>
        </div>
        <el-tooltip
          class="item"
          effect="dark"
          :content="$t('users.deleted')"
          placement="bottom-start"
        >
          <el-button
            class="float-right select-none"
            type="danger"
            size="mini"
            icon="el-icon-delete"
            circle
          >
          </el-button>
        </el-tooltip>
        <el-button
          class="float-right mx-3 border-0 bg-theme-2-400 hover:bg-theme-2-500 text-white select-none"
          size="mini"
          round
        >
          {{ $t('users.add-new') }}
        </el-button>
      </el-row>
    </el-container>
    <el-container class="p-3">
      <el-card shadow="always" class="border-0 rounded-lg w-full">
        <div class="mb-5">
          <h3 class="font-bold text-gray-600 inline-block">
            Users table
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
            :placeholder="$t('users.search')"
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
          height="400"
          :data="tableData"
          @selection-change="handleSelectionChange"
          @sort-change="handleSortChange"
        >
          <el-table-column type="selection" width="55" class="select-none" />
          <el-table-column type="expand">
            <template slot-scope="props">
              <p>Email: {{ props.row.email }}</p>
              <p>Address: {{ props.row.address }}</p>
              <p>Note: {{ props.row.note }}</p>
              <p>Join date: {{ props.row.createAt }}</p>
            </template>
          </el-table-column>
          <el-table-column label="Name" prop="name" sortable />
          <el-table-column width="100" align="right" fixed="right">
            <template slot-scope="scope">
              <el-tooltip
                class="item"
                effect="dark"
                :content="$t('users.edit')"
                placement="bottom-start"
              >
                <el-button
                  size="mini"
                  type="warning"
                  class="px-2 select-none"
                  @click="handleEdit(scope.$index, scope.row)"
                >
                  <i class="el-icon-edit"></i>
                </el-button>
              </el-tooltip>
              <el-tooltip
                class="item"
                effect="dark"
                :content="$t('users.delete')"
                placement="bottom-start"
              >
                <el-button
                  size="mini"
                  type="danger"
                  class="px-2 select-none"
                  @click="handleDelete(scope.$index, scope.row)"
                >
                  <i class="el-icon-delete"></i>
                </el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="50"
          class="my-5 float-right select-none"
          @size-change="onSizeChange"
          @current-change="onPageChange"
          @prev-click="onPagePrev"
          @next-click="onPageNext"
        />
        <div></div>
      </el-card>
    </el-container>
  </el-main>
</template>
<script>
const queryString = require('query-string')
// import { DataTable } from '~/components/common'
export default {
  async fetch() {
    const response = await this.$axios.get(
      '/users?' + queryString.stringify(this.query)
    )
    this.tableData = response.data
  },
  // components: {
  //   DataTable,
  // },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
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
    },
    handleSortChange({ prop, order }) {
      this.query.sortBy = prop
      this.query.order = order === 'descending' ? 'desc' : 'asc'
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    onSizeChange(total) {
      console.log(total)
    },
    async refresh() {
      this.query = await {
        page: 1,
        limit: 10,
        search: '',
      }
      this.$fetch()
    },
    onSearch() {
      this.$fetch()
    },
    onLimitChange() {
      this.$fetch()
    },
    async onPageChange(currentPage) {
      this.query.page = await currentPage
      this.$fetch()
    },
    async onPagePrev(currentPage) {
      this.query.page = await currentPage
      this.$fetch()
    },
    async onPageNext(currentPage) {
      this.query.page = await currentPage
      this.$fetch()
    },
  },
}
</script>
