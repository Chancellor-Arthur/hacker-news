# Interface for the Hacker News website, consisting of two pages.

## Product Requirements

### Main page
#### Shows the latest 100 news as a list sorted by date, most recent on top.
#### Each news contains:
    title
    rating
    author's nickname
    publication date
#### Clicking on the news will take you to the news page
#### The list of news should be automatically updated once a minute without user intervention
#### The page should have a button to force a refresh of the news list

### News page
#### Must contain:
    link to news
    news headline
    date
    author
    comment counter
    list of comments in the form of a tree
#### Root comments are loaded immediately upon entering the page, nested comments are loaded by clicking on the root one.
#### The list of comments should be automatically updated once a minute without user intervention
#### The page should have a button to force refresh of the list of comments
#### The page should have a button to return to the list of news