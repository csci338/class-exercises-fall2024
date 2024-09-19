from bs4 import BeautifulSoup
import requests

def main():
    # User agent to mimic a web browser
    user_agent = {'User-agent': 'Mozilla/5.0'}
    response = requests.get("https://new.cs.unca.edu/", headers=user_agent)

    # Check if the request was successful
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        # Find all anchor tags
        anchors = soup.find_all('a')
        
        # Extract and print URLs
        urls = [a['href'] for a in anchors if 'href' in a.attrs]
        for url in urls:
            print(url)
    else:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")

if __name__ == "__main__":
    main()

