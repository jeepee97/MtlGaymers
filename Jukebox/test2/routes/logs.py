from flask import Blueprint, request
from services.logService import Log_Service

log_bp = Blueprint('log', __name__)

# get logs
@log_bp.route("/logs/", methods=['GET'])
def getLogs():
	return Log_Service.GetLogsString(), 200

# add logs
@log_bp.route("/log/", methods=['PUT'])
def addLog():
	log = request.args.get("log")
	try:
		Log_Service.AddLog(log)
		return "log added", 200
	except:
		return "", 401

