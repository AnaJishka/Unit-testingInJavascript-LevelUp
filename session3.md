---
marp: true
theme: uncover
paginate: true
header: Cloud & Devops - Eduard Bargués
footer: Barcelona Technology School S.L.
# **class: invert**
# **color: Set text color**
# **backgroundColor**
---

<!--
_class: invert
-->

# **Cloud and DevOps**

**AWS & Serverless**

by Eduard Bargués

![bg opacity](images/barcelonaLandscape.png)

---

# **Some changes**

1. Hello Cloud
2. Software development
3. AWS & Serverless
4. Security in AWS
5. Cost management in AWS
6. Devops & CICD
7. Guest speaker

![bg left:40% w:100%](https://media.istockphoto.com/id/1250483402/vector/important-announcement-speech-bubble-icon-vector-design.jpg?s=612x612&w=0&k=20&c=MSqRVE08RxLlcJaC6aP6ksT0HqHzUGM3Ieyu38hRTIU=)

---

# **Evaluation**

**Assignments 70%**

**Attendance & engagement 30%**

![bg left:40% h:100%](images/math.png)

---

# **DevOps**

**Dev**elopment & **Op**eration**s**

![bg left:40% w:100%](images/devops.png)

---

# **Assignment 2**

Questions & troubleshooting
Let's do some exercices together 💪

![bg left:37% h:100%](images/feature_questions_this_or_that_game.webp)

---

# **Development**

Find the [helloWorld function](src/helloWorld.js) and test it via the [console application](src/consoleApp.js).

Console apps are great for manual testing.

For automation, we use test frameworks such as [Jest](https://www.valentinog.com/blog/jest/). Let's see an [example](tests/test.js).

![bg left:20% h:100%](https://www.freecodecamp.org/news/content/images/2023/02/image3-1.png)

---

# **Level up**

> Create a function called _processNumbers_ that receives a JSON object with one property _numbers_ as array of integers and returns an object containing the maximum number and the total sum.

Do you know the [Math library](https://syllabus.migracode.org/courses/introduction-3/course-content/javascript-i/week-1)?

Test it via a console application.

Test it with Jest.

![bg left:20% h:100%](https://www.freecodecamp.org/news/content/images/2023/02/image3-1.png)

---

# **NodeJs Lambda**

- Create a _hello world_ Lambda.
- Test it from the same UI.
- Create a _processNumbers_ Lambda.
- Create an appropiate event and test your Lambda.

[Lambda in AWS](https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html)

![bg left:30% w:100%](images/nodeJsLambdaAws.png)

---

# **Application Program Interface**

Exposes resources that users can send and retrieve data from.

Usually, when we want to _obtain_ information, we use the GET operation (a.k.a http method).

Let's explore [this api](https://jsonplaceholder.typicode.com/) with the help of [Postman](https://www.postman.com/downloads/).

---

# **Create an Api**

- Create a REST API via AWS' UI.
- Add a resource and method.
- Create a 'mock' integration.
- Test it via [Postman](https://www.postman.com/downloads/).
- Conect the method with Lambda.
- Test it again.

![bg left:35% w:100%](images/postmanApigwLambda.png)

---

# **Investigate**

Something isn't right? 🤔
[Cloudwatch](https://aws.amazon.com/cloudwatch/) can help us.

![bg left w:80%](images/questions.png)
![bg left:50% w:100%](images/cloudwatch.png)

---

# **Conclusions**

- Javascript(Js) and JSON are best friends.
- Lambda receives an _event_ and executes any function.
- _Apis_ are interfaces that expose _resources_ and operations.
- Endpoints can receive data via the request's _body_.
- _APIgateway_ integrates with Lambda to create APIs.
- _Console.log_ and _Cloudwatch_ help you troubleshoot.
