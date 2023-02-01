<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
type Cell = string | number;
const time = ref(0); // 耗时
let timer = null; // 定时器
const cellMono = ref<Cell>(""); // 输入前的值
const sudokuArr = ref<Cell[][]>(
  Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => Math.floor(Math.random() * 9 + 1))
  )
); // 数独数组
const updateCell = (e: Event, row: number, col: number) => {
  const { value } = e.target as HTMLInputElement;
  if (value.length > 1) {
    sudokuArr.value[row][col] = value[value.length - 1];
  } else {
    sudokuArr.value[row][col] = value;
  }
};
const start = () => {
  timer = setInterval(() => {
    time.value++;
  }, 1000);
};

</script>

<template>
  <header>
    <h1>Sudoku</h1>
    <div>难度：<span>简单</span></div>
    <div>耗时: <span>00:00:00</span></div>
    <div>
      <button @click="start">开始</button>
      <button>暂停</button>
      <button>重置</button>
      <button>再来一局</button>
    </div>
  </header>
  <main>
    <div class="row" v-for="(row, index) in sudokuArr" :key="'row' + index">
      <!-- TODO:根据输入状态修改格子背景和contenteditable -->
      <div class="cell" v-for="(cell, idx) in row" :key="'cell' + idx">
        <input
          type="text"
          @input="updateCell($event, index, idx)"
          :value="cell"
          :data-meno="cellMono"
          @focus="cellMono = cell"
        />
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<style scoped lang="less">
main {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 600px;
  margin: 0 auto;

  .row {
    display: flex;
    width: 100%;
    height: 10%;
    .cell {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border: 1px solid #000;
      font-size: 30px;
      font-weight: bold;
      input {
        width: 95%;
        height: 95%;
        text-align: center;
        border: none;
        outline: none;
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}
</style>
