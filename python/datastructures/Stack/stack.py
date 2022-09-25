class Empty(Exception):
    pass


class ArrayStack:
    def __init__(self) -> None:
        self._data = []

    def push(self, item):
        '''在尾部(栈顶)插入一个元素'''
        self._data.append(item)

    def pop(self):
        '''移除并返回尾部(栈顶)元素'''
        if self.is_empty:
            raise Empty('Stack is empty')
        return self._data.pop()

    def top(self):
        '''返回栈顶元素'''
        if self.is_empty:
            raise Empty('Stack is empty')
        return self._data[-1]

    def is_empty(self):
        return len(self) == 0

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return '\n'.join(str(self._data[i]) for i in range(len(self)))


def is_match(expr):
    lefty, righty = '([{', ')]}'
    sS = ArrayStack()
    for ch in expr:
        if ch in lefty:
            sS.push(ch)
        elif ch in righty:
            if sS.is_empty():
                return False
            if righty.index(ch) != lefty.index(sS.pop()):
                return False
    return sS.is_empty()


print(is_match('([{}])'))
