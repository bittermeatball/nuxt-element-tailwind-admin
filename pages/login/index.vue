<template>
  <div class="container mx-auto">
    <h1 class="text-2xl my-3">
      {{ $t('login.title') }}
    </h1>
    <div>
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
    </div>
  </div>
</template>

<script>
import { FormWrapper, InputWrapper } from '~/components/common'
export default {
  // Back to home if you've already been authenticated
  middleware: 'authNotRequired',
  components: {
    FormWrapper,
    InputWrapper,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async postLogin() {
      await this.$store.dispatch('login', this.form)
      this.$router.push('/')
    },
  },
}
</script>
