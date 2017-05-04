from flask import Flask, request

app = Flask(__name__)

@app.route('/upload', methods = ['POST'])
def upload_file():
    f = request.files['file']
    f.save('stub.txt')
    return 'ok'

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
