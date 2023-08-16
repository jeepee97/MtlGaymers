from flask import Blueprint, request
from services.loginService import Login_Service

user_logout_bp = Blueprint('user_logout', __name__)

# check for connected devices
@user_logout_bp.route("/logout")
def user_logout():
	username = request.args.get("username")
	if (Login_Service.user_exists(username)):
		return f"{username} logout"
	return f"{username} does not exist"

