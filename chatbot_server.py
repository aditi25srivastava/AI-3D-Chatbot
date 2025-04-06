from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json(force=True)
        if not data or 'message' not in data:
            return jsonify({'error': 'Invalid request, message key missing'}), 400
        user_message = data['message']
        return jsonify({"AI says": user_message[::-1]})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)