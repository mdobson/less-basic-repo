function doThing(data) {
  console.log(`Log out some data ${data}`);
}

function getThing() {
  return "data";
}

function buildExecutor() {
  return function () {
    doThing(getThing());
  };
}

buildExecutor()();
