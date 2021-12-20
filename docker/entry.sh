#!/bin/sh
set -e

echo 'enter entrypoint'
printenv

npm i
npm run serve:${BRANDING} && sleep 15 &
npm run serve:panel

exec docker-php-entrypoint "$@"