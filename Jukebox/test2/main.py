from jukeboxApp import JukeboxApp

HOST_NAME = "0.0.0.0"
PORT = 8001

if __name__ == "__main__":
	app = JukeboxApp(HOST_NAME, PORT)
	app.start()

