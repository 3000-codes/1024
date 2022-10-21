t = 12345, 54321, 'hello!'
u = t, (1, 2, 3, 4, 5) #=> ((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))
print(u) #元组在输出时总是有括号的，以便于正确表达嵌套结构。在输入时可能有或没有括号， 不过括号通常是必须的


# 集合是一个无序不重复元素的集。基本功能包括关系测试和消除重复元素。
# 可以用大括号({})创建集合。注意：如果要创建一个空集合，你必须用 set() 而不是 {} ；后者创建一个空的字典
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket) 
print('orange' in basket)

a,b = set('abracadabra'),set('alacazam')
print(a,b) #{'b', 'c', 'a', 'r', 'd'} {'z', 'c', 'a', 'm', 'l'}
print(a-b)  # 在 a 中的字母，但不在 b 中
print(a|b)  # 在 a 或 b 中的字母
print(a&b)  # 在 a 和 b 中都有的字母
print(a^b)  # 在 a 或 b 中的字母，但不同时在 a 和 b 中

## 推导式
a_set = {x for x in 'abracadabra' if x not in 'abc'}
print(a_set) #{'d', 'r'}