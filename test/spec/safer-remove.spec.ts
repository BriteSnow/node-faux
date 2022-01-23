import { deepStrictEqual as equal } from 'assert';
import { pathExists, saferRemove } from '../../src/index.js';

describe("safer-remove", function () {

  it("rm-oks", async () => {
    // FIXTURE
    const pathToDelete = 'test/.out';

    // ACTION
    try {
      await saferRemove(pathToDelete);
    } catch (ex: any) {
      equal(false, `Should not have failed to delete '${pathToDelete}' `, ex)
    }

    // CHECK
    const exists = await pathExists(pathToDelete);
    equal(false, exists, `Path should have been deleted '${pathToDelete}'`);
  });
});