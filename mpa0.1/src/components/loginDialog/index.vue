<template>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
    :show-close="false"
  >
    <el-form @keyup.enter="login">
      <el-form-item
        prop="username"
        label="账号"
      >
        <el-input
          v-model="debugUserName"
          placeholder="请输入账号"
          :autofocus="true"
        />
      </el-form-item>
      <el-form-item
        prop="password"
        label="密码"
      >
        <el-input
          v-model="debugPassword"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-button
        type="primary"
        class="lg-btn"
        @click="login"
      >
        登录
      </el-button>
    </el-form>
  </el-dialog>
</template>
<script setup>
import { ref } from 'vue'
// import A,  { useStore } from '../../store'
import A from '../../store'
const store = A.useStore()
const dialogVisible = ref(true)
const debugUserName = ref('')
const debugPassword = ref('')
const login = () => {
  store.randomizeCounter()
  if (debugUserName.value === 'admin' && debugPassword.value === 'admin') {
    // dialogVisible.value = false
  } else {
    // alert('账号或密码错误')
  }
}
const handleClose = () => {
  dialogVisible.value = false
}
</script>
<style>
</style>
