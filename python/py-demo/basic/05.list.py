a = [66.25, 333, 333, 1, 1234.5]
# 尾部扩充元素
a.append(12)
print(a)
a[len(a):]=[15]
print(a)
# 尾部扩充列表
a[len(a):]=[17,19]
print(a)
a.extend([21,23])
print(a)
# 移除元素
a.remove(333) #移除第一个值为333的元素,如果没有这个元素抛出一个 ValueError
print(a)
poped_element=a.pop(3) # 移除索引为3的元素,并返回该值,不传参则默认值为最后即len(a)
print(poped_element,a)
# a.clear() #清空列表
# del a[:]  #清空列表
# print(a)
ix=a.index(12) #返回列表中第一个值为 x 的元素的索引,如果没有这个元素抛出一个 ValueError
print(ix)
times=a.count(333) #返回 x 在列表中出现的次数
a.sort() #对列表中的元素进行排序(从小到大)
a.reverse() #反转
print(a)
# 浅克隆
b=a.copy()
c=a[:]