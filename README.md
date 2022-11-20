# Lab 8 - Starter
Name: Melvyn Nam Qiang Tan <br>
PID: A16412682 <br>

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why. <br>
Answer: 1) Within a Github action that runs whenever code is pushed. From the paragraph above, it says that "The most recent developments in the practice of testing is the increased use of automation testing, in which scripts are written to automatically test your new and existing software based on certain events." From this, I understand that automated tests should be automated and not be manual. Therefore, they can be a form of Github action since we are able to automate and include it into our pipeline so that it can run a set of scripts to test the code based on certain events such as code getting pushed to the remote repository.

2) No

3) No because the message feature is complicated and involves many components interacting with each other such as write, sending and receiving messages. Therefore, one of the cons of unit testing is that it cannot test how individual components interact with each other on an application/feature level.

4) Yes because we are checking to see if more than 80 characters have been written which is a small scale check without many moving parts. It is simple to do a unit test to see if a function will return the correct value.