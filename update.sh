#!/bin/bash

pushd vue/node_modules/@starport
find . -type f -name '*.js' -exec sed -i '' 's/http:\/\/localhost:26657/https:\/\/rpc.meep.social/g' {} \;
find . -type f -name '*.js' -exec sed -i '' 's/http:\/\/localhost:1317/https:\/\/api.meep.social/g' {} \;
find . -type f -name '*.js' -exec sed -i '' 's/http:\/\/localhost:12345/https:\/\/status.meep.social/g' {} \;
popd