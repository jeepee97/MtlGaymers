import requests

class Jukebox_Service:
	def __init__(self):
		pass

	def get_status(ipAddr, port):
		response = requests.get(f"http://{ipAddr}:{port}/jukebox/status")
		return response.text, response.status_code
