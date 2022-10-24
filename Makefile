#target
build-app:
	docker build . -t dolenc/energy-dashboard:v1

run-app:
	docker run --name energy-dashboard-container -dp 8080:80 dolenc/energy-dashboard:v1

stop-app:
	docker rm -f energy-dashboard-container

start-app:
	$(MAKE) build-app
	$(MAKE) run-app
