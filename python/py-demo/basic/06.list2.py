from collections import deque
# 列表方法使得列表可以很方便的作为一个堆栈来使用，堆栈作为特定的数据结构，最先进入的元素最后一个被释放（后进先出
stack = [3, 4, 5]
stack.append(6)
stack.append(7)
stack.pop()
stack.pop()

# 把列表当做队列用，只是在队列里第一加入的元素，第一个取出来；但是拿列表用作这样的目的效率不高。
# 在列表的最后添加或者弹出元素速度快，然而在列表里插入或者从头部弹出速度却不快（因为所有其他的元素都得一个一个地移动）
queue = deque(["Eric", "John", "Michael"])
queue.append("Terry") 
queue.popleft()

# 列表推导式
## map 方法
vec = [2, 4, 6]
vec_map=[[x, x**2] for x in vec]
print(vec_map)

##filter 方法
vec_filter=[x for x in vec if x > 3]
print('filter',vec_filter)

## map+filter
vec_mf=[3*x for x in vec if x > 3]
print(vec_mf)

## 同时遍历多个列表
vec1 = [2, 4, 6]
vec2 = [4, 3, -9]
new_vec=[[x*y,x+y] for x in vec1 for y in vec2]
print(new_vec)

my_pi= [str(round(355/113, i)) for i in range(1, 6)]
print(my_pi)

## 嵌套遍历(实例为将3X4的矩阵列表转换为4X3列表)
matrix = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],]
trans_matrix=[[row[i] for row in matrix] for i in range(4)]
print(trans_matrix)
### 实际上是
transposed = []
for i in range(4):
  transposed.append([row[i] for row in matrix])
print(transposed)

for i, v in enumerate(['tic', 'tac', 'toe']):print(i, v)#使用enumerate同时获取索引和值

# 同时遍历两个或更多的序列，可以使用 zip() 组合：
questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
for q, a in zip(questions, answers):print('What is your {0}?  It is {1}.'.format(q, a))