from flask import Flask

from jukeboxAPI import jukeboxAPI_bp

class JukeboxApp:
	def __init__(self, hostname):
		self.hostname = hostname

	def start(self):
		self.startAPI()
		self.startApp()

	def startAPI(self):
		jukeboxAPI = Flask(__name__)
		jukeboxAPI.register_blueprint(jukeboxAPI_bp, url_prefix='/jukebox')
		jukeboxAPI.run(debug=False, host=self.hostname)

	def startApp(self):
		pass
