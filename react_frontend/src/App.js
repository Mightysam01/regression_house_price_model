import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    OverallQual: 7,
    GarageCars: 2,
    ExterQual: 3,
    FullBath: 2,
    GrLivArea: 1600,
    KitchenAbvGr: 1,
    KitchenQual: 3,
    GarageType: 2,
    BsmtQual: 3,
    TotRmsAbvGrd: 6,
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: isNaN(value) ? value : Number(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://regression-house-price-model.onrender.com/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setPrediction(data.predicted_price);
  };

  return (
    <div className="App">
      
      <div className="intro">
  <h2>House Price Predictor</h2>
  <p>
    This web app estimates the sale price of a residential property using just 10 key features that most influence housing value.
  </p>
  <ul>
    <li>Powered by an XGBoost machine learning model</li>
    <li>Trained on real housing data</li>
    <li>Focused on simplicity and predictive accuracy</li>
  </ul>
  <p>
    Fill in the form below to get an instant home price prediction. If you're unsure about an input, just give your best estimate!
  </p>
</div>



      <form onSubmit={handleSubmit}>
        <label>Overall Quality (1–10):
          <input type="number" name="OverallQual" value={formData.OverallQual} onChange={handleChange} required />
        </label>

        <label>Garage Cars:
          <input type="number" name="GarageCars" value={formData.GarageCars} onChange={handleChange} required />
        </label>

        <label>Exterior Quality:
          <select name="ExterQual" value={formData.ExterQual} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="0">Poor</option>
            <option value="1">Fair</option>
            <option value="2">Good</option>
            <option value="3">Excellent</option>
          </select>
        </label>

        <label>Full Bathrooms:
          <input type="number" name="FullBath" value={formData.FullBath} onChange={handleChange} required />
        </label>

        <label>Living Area (sqft):
          <input type="number" name="GrLivArea" value={formData.GrLivArea} onChange={handleChange} required />
        </label>

        <label>Kitchens Above Ground:
          <input type="number" name="KitchenAbvGr" value={formData.KitchenAbvGr} onChange={handleChange} required />
        </label>

        <label>Kitchen Quality:
          <select name="KitchenQual" value={formData.KitchenQual} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="0">Poor</option>
            <option value="1">Fair</option>
            <option value="2">Good</option>
            <option value="3">Excellent</option>
          </select>
        </label>

        <label>Garage Type:
          <select name="GarageType" value={formData.GarageType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="0">None</option>
            <option value="1">CarPort</option>
            <option value="2">Detchd</option>
            <option value="3">Attchd</option>
            <option value="4">Basment</option>
            <option value="5">BuiltIn</option>
            <option value="6">2Types</option>
          </select>
        </label>

        <label>Basement Quality:
          <select name="BsmtQual" value={formData.BsmtQual} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="0">None</option>
            <option value="1">Poor</option>
            <option value="2">Fair</option>
            <option value="3">Good</option>
            <option value="4">Excellent</option>
          </select>
        </label>

        <label>Total Rooms Above Ground:
          <input type="number" name="TotRmsAbvGrd" value={formData.TotRmsAbvGrd} onChange={handleChange} required />
        </label>

        <button type="submit">Predict</button>
      </form>

      {prediction && (
        <div style={{ marginTop: '1rem' }}>
          <h3>{isNaN(prediction) ? prediction: `Predicted Price: ${Math.round(prediction).toLocaleString()}`}</h3>
        </div>
      )}

      <footer className="footer">
  <p>
    Built by <a href="https://github.com/Mightysam01" target="_blank" rel="noopener noreferrer">Mightysam01</a> | View source on <a href="https://github.com/Mightysam01/regression_house_price_model" target="_blank" rel="noopener noreferrer">GitHub</a>
  </p>
</footer>

    </div>
  );
}

export default App;
