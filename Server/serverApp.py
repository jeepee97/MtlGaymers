from flask import Flask

from serverAPI import serverAPI_bp
from routes.userLogin import user_login_bp
from routes.userLogout import user_logout_bp

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
		serverAPI.register_blueprint(serverAPI_bp, url_prefix='/server')
		serverAPI.register_blueprint(user_login_bp, url_prefix='/user')
		serverAPI.register_blueprint(user_logout_bp, url_prefix="/user")

	def startApp(self):
		pass
