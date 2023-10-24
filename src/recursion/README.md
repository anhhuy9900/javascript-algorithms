# Recursion
##### What's recursion?
- A progress ( a function in our case ) that call itself until someone stops it. If no one stop then i'll recurse(call itself) forever. 

##### When's using recursion?
- We use recursion to perform a unit of work multiple times

##### Why do I need to know it
- It's everywhere
- Example
    - JSON.parse / JSON.stringify
    - document.getElementById
    - DOM traversal algorithms
    - Object traversal
    - Very common with more complex algorithms
    - It's sometimes a cleaner alternative to iteration

##### How recursion functions work
- Invoke the same function with a different input until you reach your result
- Base case: the function when the recursion ends. This is important concept 
- The javascript's structure use manage function invocation that's call stack
    -  The call stack is a stack data structure 
    - Any time a function is involved it is placed (pushed) on the top of the call stack
    - When Javascript sees the return keyword or when the functions ends, the compiler will remove pop
        - Base case
        - Different input