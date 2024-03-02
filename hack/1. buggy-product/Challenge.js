// versions would be a 1D array with either '0' or '1' as its elements.
// '0' indicates the version is bug-free and '1' indicates the version is buggy.
// (Ex - For input [0, 0, 1, 1, 1], the bug was introduced in version 2 and the function should return 1)

function lastBugFreeVersion(versions) {
  let count = 0;
  for (let i = 0; i <= versions.length - 1; i++) {
    if (versions[i] == 0) {
      count = count + 1;
    }
  }
  return count;
}

lastBugFreeVersion([0, 0, 0, 1, 1]);
