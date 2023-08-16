from flask import Blueprint, request
from services.loginService import Login_Service

user_login_bp = Blueprint('user_login', __name__)

# check for connected devices
@user_login_bp.route("/login")
def user_login():
	username = request.args.get("username")
	password = request.args.get("password")

	try:
		if (Login_Service.validate_user(username, password)):
			return "login!!!"
		else:
			return "wrong username or password :("
	except:
		return "", 401

# check for connected devices
@user_login_bp.route("/logout")
def user_logout():
	username = request.args.get("username")
	if (Login_Service.user_exists(username)):
		return f"{username} logout"
	return f"{username} does not exist"
