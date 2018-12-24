module.exports = (func, testCase) => {
  for (let test of testCase) {
    const got = func(...test.args);
    const output = `${test.args} - expect: ${test.expect} GOT: ${got}`
    if (got === test.expect) {
      console.log(`PASS: ${output}`)
    } else {
      console.error(`FAILED: ${output}`)
    }
  }
}