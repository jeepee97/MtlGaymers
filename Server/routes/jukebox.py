from flask import Blueprint, request
from services.jukeboxService import Jukebox_Service

jukebox_bp = Blueprint('jukebox', __name__)

@jukebox_bp.route("/test", methods=['GET'])
def test():
	return "test", 200

# check for connected devices
@jukebox_bp.route("/status", methods=['GET'])
def get_status():
	ipAddr = request.args.get("ipAddr")
	port = request.args.get("port")
	try:
		response, status = Jukebox_Service.get_status(ipAddr, port)
		if (status != 200):
			return "an error occured on the jukebox", 200
		else:
			return response, status
	except:
		return "", 401


