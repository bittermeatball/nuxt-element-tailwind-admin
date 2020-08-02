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
      <el-row class="w-full">
        <el-col :span="16" class="mx-auto float-none">
          <el-card shadow="always" class="w-full">
            <h2>{{ $t('users.create') }}</h2>
            <FormWrapper @onSubmit="submitUser">
              <el-row :gutter="20">
                <el-col :span="12">
                  <InputWrapper></InputWrapper>
                </el-col>
                <el-col :span="12">
                  <InputWrapper></InputWrapper>
                </el-col>
              </el-row>
            </FormWrapper>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
  </el-main>
</template>
<script>
import { FormWrapper, InputWrapper } from '~/components/common'
export default {
  components: { FormWrapper, InputWrapper },
  data() {
    return {
      form: {
        name: '',
        email: '',
        avatar: '',
        address: '',
        role: '',
        note: '',
      },
    }
  },
  methods: {
    submitUser() {},
  },
}
</script>
