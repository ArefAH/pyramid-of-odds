rows = int(input("Enter the number of rows: "))

for i in range(rows + 1):
    numbers = []
    for j in range(i):
        numbers.append(str(j * 2 + 1))
    print(" ".join(numbers))   
    