# 字典以关键字为索引，关键字可以是任意不可变类型，通常用字符串或数值
tel = {'jack': 4098, 'sape': 4139}
tel['guido'] = 4127
del tel['sape']
print(list(tel.keys()))
print(tel.keys())
print(sorted(tel.keys())) # sorted() 函数返回一个已排序的序列，并不修改原值
print(list(tel.items()))

# 创建字典的方式dict构造函数和推导式
tel2=dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])
tel3=dict(sape=4139, guido=4127, jack=4098)
tel4={x: x**2 for x in (2, 4, 6)}

knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for k, v in knights.items(): print(k, v)