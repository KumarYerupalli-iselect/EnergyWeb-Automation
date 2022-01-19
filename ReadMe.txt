1) Run command : npm install
2) Execute the test with: npm test


..............................

npx tsc --outDir ..\build\page    this works fine after we go to page folder in test\functional
npx tsc --outDir ..\..\build\test\sampleTestSuite\    --- Navigate b4 to test\sampleTestSuite\ in functional page

..............................

Refer for page object examples : https://github.com/kallaspriit/typescript-nightwatch-example/blob/master/src/pages/google.ts
Example 

commands: [
		{
			enterQuery: (client: NightWatchClient, query: string) => {
				return client
					.waitForElementVisible('//input[@name="q"]', 5000)
					.setValue('//input[@name="q"]', [query, client.Keys.ENTER])
					.waitForElementVisible('//*[@id="res"]', 5000);
			},
		},
	],

------------------------

Custom commands 
refer : https://github.com/abauzac/nightwatch-typescript/blob/master/commands/wplogin.js
