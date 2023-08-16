from classes.user import User

users = []
for i in range(10):
	users.append(User(str(i), str(i)))

class Login_Service:
	def __init__(self):
		pass

	def validate_user(username, password):
		for user in users:
			if (user.username == username and user.password == password):
				return True
		return False

	def user_exists(username):
		for user in users:
			if (user.username == username):
				return True
		return False
