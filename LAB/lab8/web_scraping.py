from bs4 import BeautifulSoup
import requests
import sys

url = "https://weather.gc.ca/canada_e.html"

result = requests.get(url)
doc = BeautifulSoup(result.text, "html.parser")

temp = doc.find_all("td")
parent = temp[0].parent

list_table = []
for temps in temp:
    list_table.append(temps.text)

sys.stdout = open("./weatherreport/Weather.txt", "w")

#Calgary
print("City:", list_table[0], "Temperature:", list_table[2]) 
print()
#Halifax 
print("City:", list_table[12], "Temperature:", list_table[14]) 
print()
#Montreal
print("City:", list_table[18], "Temperature:", list_table[20]) 
print()
#Toronto
print("City:", list_table[42], "Temperature:", list_table[44]) 
print()
#Vancouver
print("City:", list_table[45], "Temperature:", list_table[47]) 

sys.stdout.close()















