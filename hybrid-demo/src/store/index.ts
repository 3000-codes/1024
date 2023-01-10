import { defineStore } from "pinia";

const useOtherStore = defineStore({
  id: "otherState",
  state: () => ({
    count: 5,
  }),
});

export const useStore= defineStore({
  id: "store",
  state: () => ({
    count: 0,
  }),
  getters: {
    pow2: (state) => state.count * state.count,
    getPow2() {
      return this.pow2;
    },
    // 使用其它 Store
    otherStoreCount(state) {
      // 这里是其他的 Store，调用获取 Store，就和在 setup 中一样
      const otherStore = useOtherStore();
      return otherStore.count;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    plusNum(num: number) {
      this.count += num;
    },
  },
});
