from flask import Blueprint
from sys import platform
import subprocess

HDMI_NAME_1 = "XWAYLAND1"
HDMI_NAME_2 = "XWAYLAND2"
serverAPI_bp = Blueprint('serverAPI', __name__)

# check for connected devices
@serverAPI_bp.route("/devices/", methods=['GET'])
def devices():
	if (platform != "linux" or platform != "linux2"):
		return "This doesn't seem to be executing on the Jukebox"

	output = subprocess.run(["xrandr", "-q"], capture_output=True, text=True)
	str_output = output.stdout

	response = ""
	screenIsConnected = False
	if (HDMI_NAME_1 in str_output):
		response += "HDMI 1 = connected\n"
		screenIsConnected = True
	else:
		response += "HDMI 1 = disconnected\n"
	if (HDMI_NAME_2 in str_output):
		response += "HDMI 2 = connected\n"
		screenIsConnected = True
	else:
		response += "HDMI 2 = disconnected\n" 
	return response, 200

