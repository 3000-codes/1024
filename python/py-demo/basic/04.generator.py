
import sys


def fibonacci(n):
  a,b,counter=0,1,0
  while True:
    if(counter>n): 
      return
    yield a
    a,b=b,a+b
    counter+=1

f10=fibonacci(10)
# print(next(f10))
# print(next(f10))
# print(next(f10))
while True:
  try:
    print(next(f10))
  except StopIteration:
    sys.exit()