# guess-word
This is word guessing program.
Guess the word letter by letter based on the clue provided.
run command : 
npm install  
node .\src\main.js

## Sample output
node .\src\main.js
Guess the word by guessing letter by letter..
Hint : a list of questions.
#### : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
#### : --- --- --- --- --- --- --- --- --- --- --- --- ---
Input next letter..Q
#### : A B C D E F G H I J K L M N O P --- R S T U V W X Y Z
#### : Q --- --- --- --- --- --- --- --- --- --- --- ---
Input next letter..U
#### : A B C D E F G H I J K L M N O P --- R S T --- V W X Y Z
#### : Q U --- --- --- --- --- --- --- --- --- --- ---
Input next letter..E
#### : A B C D --- F G H I J K L M N O P --- R S T --- V W X Y Z
#### : Q U E --- --- --- --- --- --- --- --- --- E
Input next letter..S
#### : A B C D --- F G H I J K L M N O P --- R --- T --- V W X Y Z
#### : Q U E S --- --- --- --- --- --- --- --- E
Input next letter..T
#### : A B C D --- F G H I J K L M N O P --- R --- --- --- V W X Y Z
#### : Q U E S T --- --- --- --- --- --- --- E
Input next letter..O
#### : A B C D --- F G H I J K L M N --- P --- R --- --- --- V W X Y Z
#### : Q U E S T --- O --- --- --- --- --- E
Input next letter..N
#### : A B C D --- F G H I J K L M --- --- P --- R --- --- --- V W X Y Z
#### : Q U E S T --- O N N --- --- --- E
Input next letter..R
#### : A B C D --- F G H I J K L M --- --- P --- --- --- --- --- V W X Y Z
#### : Q U E S T --- O N N --- --- R E
Input next letter..I
#### : A B C D --- F G H --- J K L M --- --- P --- --- --- --- --- V W X Y Z
#### : Q U E S T I O N N --- I R E
Input next letter..A
#### : --- B C D --- F G H --- J K L M --- --- P --- --- --- --- --- V W X Y Z
#### : Q U E S T I O N N A I R E
Completed...