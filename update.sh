#!/bin/bash

pushd vue/node_modules/@starport
# find . -type f -name '*.js' -exec sed -i '' 's/http:\/\/localhost:/http:\/\/159.65.103.150:/g' {} \;
popd

pushd vue/src/store/generated
find . -type f -name '*.js' -exec sed -i '' 's/5000000/50000000/g' {} \;
popd