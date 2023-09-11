ints = [1200,30,800,70,600,150,350,460]
values = []
value = ""
for i in range (len(ints) -1, -1 , -1):
    values.append(round(((ints[i] / 1360) * 100) , 2))

for i in range(0 , len(values) , 2):
    value += str(values[i+1] ) + "vw" + " " + str(values[i]) + "vw"
    value += " , "

print(value)