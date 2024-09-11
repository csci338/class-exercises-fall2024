def find_duplicates_dict(l: list) -> list:
    frequency = {}
    duplicates = []

    for item in l:
        if item in frequency:
            frequency[item] += 1
        else:
            frequency[item] = 1

    for key, count in frequency.items():
        if count > 1:
            duplicates.append(key)

    return duplicates

if __name__ == "__main__":
    sample1 = [3, 7, 5, 6, 7, 4, 8, 5, 7, 66]
    sample2 = [3, 5, 6, 4, 4, 5, 66, 6, 7, 6]
    sample3 = [3, 0, 5, 1, 0]
    sample4 = [3]
    
    print("Sample 1:", find_duplicates_dict(sample1)) 
    print("Sample 2:", find_duplicates_dict(sample2)) 
    print("Sample 3:", find_duplicates_dict(sample3))  
    print("Sample 4:", find_duplicates_dict(sample4))  