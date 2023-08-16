from flask import Flask

from routes.userLogin import user_login_bp
from routes.jukebox import jukebox_bp

class ServerApp:
	def __init__(self, hostname, port):
		self.hostname = hostname
		self.port = port

	def start(self):
		self.startAPI()
		self.startApp()

	def startAPI(self):
		serverAPI = Flask(__name__)
		self.register_all_blueprints(serverAPI)
		serverAPI.run(debug=False, host=self.hostname, port=self.port)

	def register_all_blueprints(self, serverAPI):
		serverAPI.register_blueprint(user_login_bp, url_prefix='/user')
		serverAPI.register_blueprint(jukebox_bp, url_prefix='/jukebox')

	def startApp(self):
		pass
