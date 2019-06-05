# hps-javascript-codeceptjs
[![Build Status](https://travis-ci.org/hiptest/hps-javascript-codeceptjs.svg?branch=master)](https://travis-ci.org/hiptest/hps-javascript-codeceptjs)

Hiptest publisher samples with Javascript/CodeCeptJS

In this repository you'll find tests generated in Javascript/CodeCeptJS format from [Hiptest](https://hiptest.com), using [Hiptest publisher](https://github.com/hiptest/hiptest-publisher).

The goals are:

 * to show how tests are exported in Javascript/CodeCeptJS.
 * to check exports work out of the box (well, with implemented actionwords)

System under test
------------------

The SUT is a (not that much) simple coffee machine. You start it, you ask for a coffee and you get it, sometimes. But most of times you have to add water or beans, empty the grounds. You have an automatic expresso machine at work or at home? So you know how it goes :-)

Prerequesites
-------------

* [Node.js](https://nodejs.org/en/) or [io.js](https://iojs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Hiptest publisher](https://github.com/hiptest/hiptest-publisher)

Update tests
-------------

To update the tests:

    hiptest-publisher -c javascript-codeceptjs.conf --without=actionwords

The tests are generated in the [``features``](https://github.com/hiptest/hps-javascript-codeceptjs/tree/master/features) directory.


Run tests
---------

To build the project and run the tests, use the following command:

    npm install
    npx codeceptjs run --steps

The SUT implementation can be seen in [``src/coffee_machine.js!``](https://github.com/hiptest/hps-javascript-codeceptjs/blob/master/src/coffee_machine.js)

The test report is generated in ```junit_output.xml```