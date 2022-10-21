from random import random


times=12
while times>0:
  print(times)
  times-=1

while True:
  a=random()
  print(a)
  if a<0.2: break


languages=['A','B']
for x in languages:
  print(x)
else: print('over')

for i in range(-5,-19,-2):#生成-5到-19之间,步长为-2的数字序列(不包括9)
  print(i)


# pass 不做任何事情，一般用做占位语句

for letter in 'Runoob': 
   if letter == 'o':
      pass
      print ('执行 pass 块')
   print ('当前字母 :', letter)
 
print ("Good bye!")