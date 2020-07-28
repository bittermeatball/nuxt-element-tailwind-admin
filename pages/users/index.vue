<template>
  <el-main>
    <el-container>
      <el-row class="w-full">
        <!--  -->
        <h1 class="text-xl font-bold text-dark inline-block mr-3">
          {{ $t('users.title') }}
        </h1>
        <!--  -->
        <el-button
          class="float-right"
          type="danger"
          size="mini"
          icon="el-icon-delete"
          circle
        >
        </el-button>
        <el-button class="float-right mx-3" type="success" size="mini">
          {{ $t('users.add-new') }}
        </el-button>
      </el-row>
    </el-container>
    <el-container>
      <!--  -->
    </el-container>
  </el-main>
</template>
