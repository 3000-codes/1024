import re
content = '白13888888888日依山尽,黄13888888888河入海流,欲8138887888888穷千里目,更上13888888888一层楼'
pattern = r"(1[3-9])\d{9}"
print(re.sub(pattern, r"\1*********", content))


