This is a basic node.js express app that uses the 
https://github.com/NaturalNode/natural npm package to classify the vendor strings with a naive bayesian classifier.

There is stemming and tokenization by default but it can be customized.  The github page on natural explains about this.

It is assumed that node is installed already.
To install, unzip the archive and in the root of the bayes_classifier directory run:

npm install   --this loads the dependencies

node app.js   --this starts the server

A server will start on port 3030. The data file <master.csv> in /config  directory will be read in and the classifier trained with that data.  <classifier.json> is saved in the root of the directory.  This is the saved state of the classifier that is loaded on /train and /categorize requests.
Wait until the console says:
"The classifier file was saved!"
to start making requests.

2 endpoints exist that utilize a POST call:

/train?vendorString=<name>&category=<category>

	--params vendorString and category

/categorize?vendorString=<name>

	--param vendorString


A postman collection file with a few requests is included called <Bayes.postman_collection>

The key to getting the classifier to work better is to train it more, and to get the perfect
processing on the input.  The processing could be improved.

~cloudybay


