from flask import Flask, request, jsonify
import xgboost as xgb
import numpy as np
import pandas as pd

app = Flask(__name__)

# Load model
model = xgb.Booster()
model.load_model("xgb_house_price_model.json")

# Load columns used during training (hardcoded or from a file)
model_features = ['OverallQual', 'GarageCars', 'ExterQual', 'FullBath', 'GrLivArea', 'KitchenAbvGr',
                  'KitchenQual', 'GarageType', 'BsmtQual', 'TotRmsAbvGrd']  # match your top N

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    try:
        input_df = pd.DataFrame([data], columns=model_features)
        dmatrix = xgb.DMatrix(input_df)
        prediction = model.predict(dmatrix)
        return jsonify({'predicted_price': float(prediction[0])})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
