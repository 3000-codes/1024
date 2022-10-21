import sys


list=[1,2,3,4,5]
it=iter(list)

# for x in it:
#   print(x)

# while True:
#   try:
#     print(next(it))
#   except StopIteration:
#     print('over')
#     sys.exit()

class MyNumbers:
  def __iter__(self):
    self.a=1
    return self
  def __next__(self):
    x=self.a
    if(x>20):
      raise StopIteration
    self.a+=1
    return x

myclass=MyNumbers()
myiter=iter(myclass)

while True:
  try:
    print(next(myiter))
  except StopIteration:
    print('over')
    sys.exit()