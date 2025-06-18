# House Price Prediction App

This project is a full-stack machine learning web application that predicts house prices based on ten key property features. It leverages an XGBoost regression model trained on real estate data and is deployed using modern web technologies.

---

## Live Demo

- **Frontend (React):** [regression-house-price-model.vercel.app](https://regression-house-price-model-fqphdv60m.vercel.app/)
- **Backend (Flask API):** [regression-house-price-model.onrender.com](https://regression-house-price-model.onrender.com/)

---

## Features

- Predicts house sale prices using 10 top-performing features from housing data
- Machine learning model built with **XGBoost**
- Clean, responsive **React UI** with form validation
- REST API deployed using **Flask + Render**
- Frontend hosted using **Vercel**
- CORS enabled for seamless API interaction

---

## Model Details

- Algorithm: XGBoost Regressor
- Feature selection: Top 10 most important features based on model gain
- Training data: Ames Housing dataset downloaded from kaggle.com

---

## Tech Stack

| Layer       | Tech                     |
|-------------|--------------------------|
| ML Model    | XGBoost                  |
| Backend API | Flask + Flask-CORS       |
| Frontend    | React                    |
| Deployment  | Render (API), Vercel (UI)|
| Hosting     | GitHub + Hugging Face (backup model file) |

---

## Local Development

### 1. Clone the repository
```bash
git clone https://github.com/Mightysam01/regression_house_price_model.git
cd house-price-predictor
```

### 2. Run Flask backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 3. Run React frontend

```bash
cd frontend
npm install
npm start
```

---

## Folder Structure

```
├── backend/
│   ├── app.py
│   ├── xgboost_model_top10.json
│   └── requirements.txt
├── frontend/
│   ├── src/App.js
│   ├── src/App.css
│   └── ...
```

---

## Model Backup

The trained model file (`xgboost_model_top10.json`) is also hosted on Hugging Face Hub (optional for download or updates).

---

## Notebook

You can view or rerun the model training process using the Jupyter notebook:

[Open in Google Colab](https://github.com/Mightysam01/regression_house_price_model/blob/main/RegressionHousePrice.ipynb)


