#!/bin/bash
yarn generate-mjml-react
result=$(git diff --quiet --exit-code HEAD || echo "fail")
if [ "$result" == "fail" ]; then
    echo ">>> MJML REACT CHECK FAILED! <<<"
    echo "Common cause: upgraded mjml or edited an mj-custom-component -> run"
    echo ""
    echo "    $ yarn generate-mjml-react"
    echo ""
    git --no-pager diff --stat HEAD
    echo ""
    echo "=============="
    echo ""
    git --no-pager diff HEAD
    echo ""
    echo "=============="
    exit 1
fi