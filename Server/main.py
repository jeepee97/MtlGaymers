from serverApp import ServerApp

HOST_NAME = "0.0.0.0"
PORT = 8000

if __name__ == "__main__":
	app = ServerApp(HOST_NAME, PORT)
	app.start()

