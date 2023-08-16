from serverApp import ServerApp

HOST_NAME = "0.0.0.0"

if __name__ == "__main__":
	app = ServerApp(HOST_NAME)
	app.start()

