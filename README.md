# graphql-playlist
All course files for the GraphQL tutorial playlist on The Net Ninja YouTube channel.

Node modules are not included in the course files. After download, run npm install to install the modules (client and server folders)


Here is the query and mutation to perform operation
Use these queries and mutations on url : http://localhost:4000/graphql



## To add Book
# mutation {
#   addBook(name: "Rich Dad Poor Dad", genre: "Education", authorId: "65b9eafba1f3d1075155cde3" ) {
#     name
#   }
# }

## To add author
# mutation {
#   addAuthor(name: "Nimita", age: 24){
#     name
#   }
# }

# To find all books
# query {
#   books {
#     id,
#     name,
#     author {
#       id
#     }
#   }
# }

## To find all authors
# query {
#   authors{
#     id,
#     name
#   }
# }

## To find particular author and its books
# query {
#   author(id:"65b9eafba1f3d1075155cde3") {
#     name,
#     books {
#       id,
#       name
#     }
#   }
# }

## To find particular book and its author
#  query {
#    book(id: "65ba04a95ef4aa16aad98d19") {
# 		name,
#     author {
#       id,
#       name
#     }
# 	}
# }