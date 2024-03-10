from flask import Flask, request, jsonify

app = Flask(__name__)

USER_DATABASE = {
    "user1": "password1",
    "user2": "password2"
}

def authenticate(username, password):
    if username in USER_DATABASE and USER_DATABASE[username] == password:
        return True
    return False

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if authenticate(username, password):
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8080)
