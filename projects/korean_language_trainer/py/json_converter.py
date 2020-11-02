def show():
    # open file
    with open("korean-data.txt") as file:
        for line in file:
            line_str = str(line)
            if '.' in line_str:
                new_line = line.split('.')
            elif '?' in line_str:
                new_line = line.split('?')
            if len(new_line[2]) > 2:
                # These values are written really weird to just get the written data to the match the JSON format
                second_value = '"korean": ' + ' ' + '"' + new_line[2] + '"' + ',\n'
                first_value = '{ \n"english": ' + ' ' + '"' + new_line[0] + '"' + ',\n'
                third_value = '"level": 1 \n},\n\n'
                data = first_value + second_value + third_value
            else:
                second_value = '"korean": ' + ' ' + '"' + new_line[1] + '"' + ',\n'
                first_value = '{ \n"english": ' + ' ' + '"' + new_line[0] + '"' + ',\n'
                third_value = '"level": 1 \n}, \n\n'
                data = first_value + second_value + third_value
            print("Korean: {} --- English: {}".format(new_line[0], second_value))
            write(data)

def write(data):
    with open('data.json', 'a') as file:
        file.write(data)
        file.close()
                      
                

if __name__ == "__main__":
    show()