#!/bin/bash

pushd vue/node_modules/@starport
find . -type f -name '*.js' -exec sed -i '' 's/http:\/\/localhost:/https:\/\/meep.social:/g' {} \;
popd