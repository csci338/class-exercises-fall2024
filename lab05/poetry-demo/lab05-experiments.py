import requests
from bs4 import BeautifulSoup

def main():
    print("hello world")
    # user_agent makes it seem like the request is coming from a web browser (versus a bot)
    user_agent = {'User-agent': 'Mozilla/5.0'}
    response = requests.get("https://new.cs.unca.edu/", headers=user_agent)
    # Create a BeautifulSoup object from the HTML
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find all <a> tags and extract href attributes (links)
    links = soup.find_all('a')
    
    # Loop through and print the href attribute for each <a> tag
    for link in links:
        url = link.get('href')
        if url:
            print(url)

if __name__ == "__main__":
    main()