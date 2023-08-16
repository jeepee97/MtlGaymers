from flask import Flask

from jukeboxAPI import jukeboxAPI_bp
from routes.userLogin import user_login_bp
from routes.userLogout import user_logout_bp

class JukeboxApp:
	def __init__(self, hostname):
		self.hostname = hostname

	def start(self):
		self.startAPI()
		self.startApp()

	def startAPI(self):
		jukeboxAPI = Flask(__name__)
		self.register_all_blueprints(jukeboxAPI)
		jukeboxAPI.run(debug=False, host=self.hostname)

	def register_all_blueprints(self, jukeboxAPI):
		jukeboxAPI.register_blueprint(jukeboxAPI_bp, url_prefix='/jukebox')
		jukeboxAPI.register_blueprint(user_login_bp, url_prefix='/user')
		jukeboxAPI.register_blueprint(user_logout_bp, url_prefix="/user")

	def startApp(self):
		pass
