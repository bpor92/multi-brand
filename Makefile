.PHONY: help up stop init rm build flyway connect exec deploy switch upgrade ocr
.SILENT:

name = app
path = docker-compose -f docker-compose.yml -f docker-compose.dev.yml

brand1-up:
	BRANDING=brand1 $(shell echo $(path) 'up --force-recreate')

brand2-up:
	BRANDING=brand2 $(shell echo $(path) 'up --force-recreate')

## Stop containers
stop:
	$(shell echo $(path) 'stop')

## Remove containers and it's data
rm:
	@make stop
	$(shell echo $(path) 'down -v')
	$(shell echo $(path) 'rm --force')

## Connect into a running container, e.g: make connect s=nginx
connect:
	@make exec s=$(s) c=bash

## Execute a command in a running container, e.g: make exec s=nginx c=bash
exec:
	$(shell echo '@-' $(path) 'exec' $(s) $(c))

## Clean dist in brand folder
dist-clean:
	rm -rf module.brand1/dist
	rm -rf module.brand2/dist
