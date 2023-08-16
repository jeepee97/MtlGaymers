
logs = []
for i in range(5):
    logs.append(str(i))

class Log_Service:
    def __init__(self):
        pass

    def AddLog(newLog):
        logs.append(newLog)

    def GetLogs():
        return logs

    def GetLogsString():
        return "".join(logs)