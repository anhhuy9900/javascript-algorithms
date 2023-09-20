# Javascript algorithms
javascript-algorithms

#### What Is an Algorithm?
What is an algorithm? Put simply, an algorithm is a step-by-step procedure for solving a problem. Algorithms can be written in any programming language, but they all share some common characteristics. First and foremost, algorithms are sequence tasks. That means that the steps in the algorithm must be done in order, and each step depends on the results of the previous steps. Secondly, algorithms are deterministic: given the same input data, exactly the same program will produce the same output every time. Finally, there are some measures for an algorithm to be efficient. Time and space: those two measures determine how efficient your algorithm is.

#### Problem Solving
- ###### OBJECTIVES
    - Define what an algorithm is
    - Obtain a description of the problem
    - Devise a plan to solve algorithms / Analyze the problem
    - Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer
- ###### Understand the Problem
    - The goal of any algorithm is to solve a problem.  When solving an algorithm problem, it is important to understand the problem and the steps involved in solving it. This understanding will allow you to correctly follow the instructions and complete the task
        - Can I restate the problem in my own words?
        - What are the inputs that go into the problem?
        - What are the outputs that should come from the solution to the problem?
        - Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
        - How should I label the important pieces of data that are a part of the problem?
- ###### Explore Concrete Examples
    - Start with Simple Examples
        - Write simple function
        ```
        function countArray(arr = []) {
            return arr ? arr.length : 0
        }
        ```
    - Progress to More Complex Examples
        - countArray(null)
    - Explore Examples with Empty Inputs
        - countArray()
    - Explore Examples with Invalid Inputs
        - countArray("string")
- ###### Break It Down
    - When solving algorithms problems, breaking them down into smaller parts is usually the best way to go. Once you understand how each part works and interacts with the others, you can solve the problem more quickly.
    - This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.
        - Find the core difficulty in what you're trying to do
        - Temporarily ignore that difficulty
        - Write a simplified solution
        - Then incorporate that difficulty back in

        ```
        function countStrInArray(arr = []) {
            // Firstly, we need to verify the type of arr variable is array
            // If the arr variable is not array, what value will be returned ?
            // and then loop the arr to find element is number
                // check the element is string or not
                // if the element is string we will increase the number
                // But the element isn't string we will ignore and move next element
            // return number value after finished number of array
        }
        ```

- ###### Solve / Simplify
    - Find the core difficulty in what you're trying to do
    - Temporarily ignore that difficulty
    - Write a simplified solution``````
    - Then incorporate that difficulty back in

- ###### Look Back and Refactor
    - Can you check the result?
        - When we already finished the feature, we need think about how to check the result of the feature
    - How do you test it?
        - We need to prepare the library to test the feature by run some test to call it and check is it work for now ?
    - Can you understand it at a glance?
        - When we read some code of which the features or maintain it for someone, need to reads code line by line but sometime if you can read code asap, it will help you save time to review and understand it before changing / fixing it 
    - Can you use the result or method for some other problem?
        - Sometime, the project has many classes, functions will be used in many places, and maybe many features will be able to be used for different situations. When we do something with a new task, we need to think about how to use those classes, functions, or fix something for new features.
    - Can you improve the performance of your solution?
        - When we have already finished the feature, we should look at the code and think, Can it be improved or not, and how can it be improved? and there may be some features we need to test about function performance with some tools and code, and then we will find the issues in the code.
    - Could you think of other ways to refactor?
        - When I already understand the code, but for some parts I don't know how to fix, I will find some ways to fix it on the internet. One way or another, we should find the best solution to refactor your code.
    - How have other people solved this problem?
        - In some situations, you can ask someone on the internet or any member on your team and have a discussion with them about your solution before you adapt it to code (if you can)

- ##### Problem Solving Patterns
    - Frequency Counter
        - This pattern use the objects or sets to collect values/ frequencies of values. This can often avoid the need for nested loops or 0(N ^ 2) operations with arrays / strings
    - Multiple Pointers
        - Creating pointers or values that correspond to an index or position and move towards the beginning end or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well
    - Sliding Window
        - This pattern involves creating a window which can either be an array or number from one position to another, Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string etc... 
    - Divide and Conquer
        - This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity
    - Dynamic Programming
    - Greedy Algorithms
    - Backtracking
    - Recap :
        - Developing a problem solving approach is incredibly important
        - Thinking about code before writing code will always make you solve problems faster
        - Be mindful about problem solving patterns           
        - Using frequency counters, multiple pointers, sliding window and divide and conquer will help you reduce time and space complexity and help solve more challenging problems
    