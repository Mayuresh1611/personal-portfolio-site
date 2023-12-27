l1 = [-30 , -20 , -10 , 0 , 10 , 20 , 30]
l2 = [10 , 20]

l3 = []
for i in l2:
    for j in l1:
        l3.append([j , i])

print(l3)