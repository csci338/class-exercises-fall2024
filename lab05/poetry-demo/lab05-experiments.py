import requests
from bs4 import BeautifulSoup

def main():
    print("hello world")

    # user_agent makes it seem like the request is coming from a web browser (versus a bot)
    user_agent = {'User-agent': 'Mozilla/5.0'}

    # Send a GET request to the CS homepage with the user-agent header
    response = requests.get("https://new.cs.unca.edu/", headers=user_agent)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the page content with BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')

        # Find all anchor tags with an href attribute
        links = soup.find_all('a', href=True)

        # Loop through the links and print each URL
        for link in links:
            print(link['href'])
    else:
        print(f"Failed to retrieve the webpage. Status code: {response.status_code}")

if __name__ == "__main__":
    main()
