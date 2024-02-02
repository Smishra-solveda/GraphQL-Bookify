Here are the ScreenShot of project

# Home Page
![Screenshot (507)](https://github.com/Smishra-solveda/GraphQL-Bookify/assets/133752093/78439f1d-bd3a-439e-9deb-e2ee2d24aed7)

# Queries and Mutation
![Screenshot (508)](https://github.com/Smishra-solveda/GraphQL-Bookify/assets/133752093/9c0e8e6b-e4e1-4614-9a25-725d7352cc2d)


Here is the query and mutation to perform operation
Use these queries and mutations on url : http://localhost:4000/graphql



# To add Book
 mutation {
   addBook(name: "Rich Dad Poor Dad", genre: "Education", authorId: "65b9eafba1f3d1075155cde3" ) {
     name
   }
 }

# To add author
 mutation {
   addAuthor(name: "Nimita", age: 24){
     name
   }
 }

# To find all books
 query {
   books {
     id,
     name,
     author {
       id
     }
   }
 }

# To find all authors
 query {
   authors{
     id,
     name
   }
 }

# To find particular author and its books
 query {
   author(id:"65b9eafba1f3d1075155cde3") {
     name,
     books {
       id,
       name
     }
   }
 }

# To find particular book and its author
  query {
    book(id: "65ba04a95ef4aa16aad98d19") {
 		name,
     author {
       id,
       name
     }
 	}
 }
