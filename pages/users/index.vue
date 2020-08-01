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
      <DataTable endpoint="/users">
        <el-table-column type="expand">
          <template slot-scope="props">
            <p>Email: {{ props.row.email }}</p>
            <p>Address: {{ props.row.address }}</p>
            <p>Note: {{ props.row.note }}</p>
            <p>Join date: {{ props.row.createAt }}</p>
          </template>
        </el-table-column>
        <el-table-column label="Name" prop="name" sortable />
      </DataTable>
    </el-container>
  </el-main>
</template>
<script>
// Modify this DataTable component to suit your api
import { DataTable } from '~/components/common'
export default {
  components: {
    DataTable,
  },
}
</script>
