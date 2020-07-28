<template>
  <Dialog id="singin-dialog" title="Đăng nhập">
    <FormWrapper @onSubmit="postLogin">
      <InputWrapper rules="required|email">
        <!--  -->
        <el-input
          v-model="form.email"
          type="email"
          :placeholder="$t('login.email')"
        ></el-input>
      </InputWrapper>
      <InputWrapper rules="required">
        <el-input
          v-model="form.password"
          type="password"
          :placeholder="$t('login.password')"
        ></el-input>
      </InputWrapper>
      <el-button native-type="submit">
        {{ $t('login.button') }}
      </el-button>
    </FormWrapper>
  </Dialog>
</template>
<script>
import { Dialog } from '~/components/common'
export default {
  components: {
    Dialog,
    FormWrapper: () =>
      import('~/components/common/Templates/Form/FormWrapper.vue'),
    InputWrapper: () =>
      import('~/components/common/Templates/Form/InputWrapper.vue'),
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  // Back to home if you've already been authenticated
  methods: {
    async postLogin() {
      await this.$store.dispatch('login', this.form)
    },
  },
}
</script>
