import { deepStrictEqual as equal } from 'assert';
import { pathExists } from '../../src/index.js';

describe('path-exists', async function () {

	it('simple-exists', async () => {
		// FIXTURE
		const files = ["tsconfig.json", "./tsconfig.json", "src/index.ts", "src/"]

		// ACTION
		for (const file of files) {
			const exits = await pathExists(file);
			equal(true, exits, `pathExits should be true for '${file}'`)
		}
	});

	it('simple-no-exists', async () => {
		// FIXTURE
		const files = ["crazy-file.name", "./not-found/with-no-ext",]

		// ACTION
		for (const file of files) {
			const exits = await pathExists(file);
			equal(false, exits, `pathExits should be false for '${file}'`)
		}
	});

});