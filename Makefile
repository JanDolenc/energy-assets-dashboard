#target
build-app:
	docker build . -t dolenc/energy-dashboard-api:v1 --target build
  docker build . -t dolenc/energy-dashboard:v1

run-app:
	docker run --name energy-dashboard-container -dp 8080:80 dolenc/energy-dashboard:v1
  docker run --name energy-dashboard-api -dp 5000:5000 dolenc/energy-dashboard-api:v1

stop-app:
	docker rm -f energy-dashboard-container
  docker rm -f energy-dashboard-api

start-app:
	$(MAKE) build-app
	$(MAKE) run-app
