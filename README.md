# bdt
Bulk Data Test Suite and Test Runner - DPC Branch

## Setup
`npm install`

## Usage
`TOKEN=<access_token> node index.js --pattern "testSuite/**/!(status.test.js|authorization.test.js)"`

## Notes
- The authorization test is invalid for DPC, and therefore skipped
- We've hacked the BulkDataClient constructor to allow an access token to be passed as an environment variable