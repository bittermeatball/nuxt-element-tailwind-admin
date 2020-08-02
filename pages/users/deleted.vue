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
        <nuxt-link to="/users">
          <el-tooltip
            class="item"
            effect="dark"
            :content="$t('users.list')"
            placement="bottom-start"
          >
            <el-button
              class="float-right select-none"
              type="primary"
              size="mini"
              icon="el-icon-document"
              circle
            >
            </el-button>
          </el-tooltip>
        </nuxt-link>
      </el-row>
    </el-container>
    <el-container class="p-3">
      <DataTable endpoint="/users" :actions="actions">
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
  data() {
    return {
      actions: [
        {
          name: 'restore',
          label: 'components.table.data.restore',
        },
        {
          name: 'delete-permanently',
          label: 'components.table.data.delete-pernamently',
        },
      ],
    }
  },
}
</script>
