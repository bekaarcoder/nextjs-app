import requests
from bs4 import BeautifulSoup

app_url = "https://www.goodreads.com/choiceawards/best-fiction-books-2020"
url = "https://www.google.com/"
headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
}

res = requests.get(app_url, headers=headers)
soup = BeautifulSoup(res.text, 'html.parser')
import json

books = []

titles = soup.select('.answerWrapper a > img')

for title in titles:
  img_src = title.get('src')
  book_detail = title.get('title').split('by')
  book_title = book_detail[0].strip()
  author = book_detail[1].strip()
  book = {
    "title": book_title,
    "author": author,
    "image": img_src
  }
  books.append(book)

books_json = json.dumps(books, indent=2)
print(books_json)

with open('books.json', 'w') as file:
  file.write(books_json)