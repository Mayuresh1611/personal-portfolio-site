ints = [1360 ,45,1320,43,1100,200,1000,200,680,0,500,0,200,130,0,300]
values = []
value = ""
for i in range (len(ints) -1, -1 , -1):
    values.append(round(((ints[i] / 1360) * 100) , 2))

for i in range(0 , len(values) , 2):
    value += str(values[i+1] ) + "vw" + " " + str(values[i] +2) + "vw"
    value += " , "

print(value)