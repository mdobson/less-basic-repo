function doThing(data) {
  console.log(`Log out some data ${data}`);
}

function getThing() {
  return `data => ${Math.floor(100 * Math.random())}`;
}

function buildExecutor() {
  return function () {
    doThing(getThing());
  };
}

buildExecutor()();
