import { ref, reactive, isRef, isProxy } from 'vue';
import { cloneDeep } from 'lodash-es';
import { ElMessage } from 'element-plus';

/**
 * @param {any} value 未知类型的参数
 * @returns {any} 如果是ref类型，返回value，如果是proxy类型，返回cloneDeep后的值，否则返回原值
 * @description 用于解决响应式类型数据转换为非响应式类型数据
 */
export const unreactive = value => isRef(value) ? value.value : isProxy(value) ? cloneDeep(value) : value;

/**
 * @param {()=>Promise<any>} func 接口函数
 * @param {()=>void} onError 错误回调
 * @returns 接口最终返回的数据
 * @description 用于减少接口函数中的try catch
 */
export const preventErrorHandler = async (func, onError) => {
  const [err, { data, success, message, content }] = await func();
  if (err) return console.error(err);
  if (!success) return onError?.(message);
  return data || content;
};
/**
 * @param {Object} option 配置项
 * @param {Object} [option.searchForm={}] 搜索表单
 * @param {Function} option.getListApi 获取列表数据的接口函数
 * @param {Function} option.resetForm 重置搜索表单的函数
 * @returns {Object} 需要在页面中使用的数据和方法
 * @description 封装了分页列表的常用逻辑:查询,重置,刷新,分页
 */
const usePageHelper = (option) => {
  const {
    searchForm = {},
    resetForm = () => { },
    getListApi = () => { throw new Error('getListApi is required'); }
  } = option;
  const loading = ref(false);
  const page = reactive({
    pageNum: 1,
    pageSize: 10,
    total: 0
  });
  const tableData = ref([]);
  /**
   * @description 获取列表数据或者刷新列表数据
   */
  const getList = async () => {
    loading.value = true;
    const params = {
      ...unreactive(searchForm),
      pageNum: page.pageNum,
      pageSize: page.pageSize
    };
    const data = await preventErrorHandler(() => getListApi(params), ElMessage.error);
    loading.value = false;
    tableData.value = data.list;
    page.total = data.total;
  };
  /**
   * @description 重置搜索表单
   */
  const reset = () => {
    page.pageNum = 1;
    page.pageSize = 10;
    resetForm();
    getList();
  };
  /**
   * @param {number} size 每页显示条数
   */
  const sizeChange = (size) => {
    page.pageSize = size;
    page.pageNum = 1;
    getList();
  };
  /**
   * @param {number} num 当前页码
   */
  const currentChange = (num) => {
    page.pageNum = num;
    getList();
  };
  /**
   * @description 触发搜索
   */
  const doSearch = () => currentChange(1);
  return {
    page,
    tableData,
    loading,
    getList,
    doSearch,
    reset,
    sizeChange,
    currentChange
  };
};
export default usePageHelper;
