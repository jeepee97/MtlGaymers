import json
from flask import Blueprint, request
from services.loginService import Login_Service

user_login_bp = Blueprint('user_login', __name__)

# check for connected devices
class LoginResponse:
	def __init__(self, description):
		self.description = description

@user_login_bp.route("/login")
def user_login():
	username = request.args.get("username")
	password = request.args.get("password")

	try:
		if (Login_Service.validate_user(username, password)):
			resp = LoginResponse("login!!!")
			return json.dumps(resp.__dict__)
		else:
			resp = LoginResponse("Wrong username of password :(")
			return json.dumps(resp.__dict__)
	except:
		return "", 401

# check for connected devices
@user_login_bp.route("/logout")
def user_logout():
	username = request.args.get("username")
	if (Login_Service.user_exists(username)):
		return f"{username} logout"
	return f"{username} does not exist"

# change password
@user_login_bp.route("/changepsw")
def user_change_password():
	email = request.args.get("email")
	
	# authenticated user
	if (email == None):
		pass
	# unauthenticated user
	else:
		pass

