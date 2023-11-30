import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './App.css';

// Styles for the Google Map container
const mapContainerStyle = {
  height: "200px",
  width: "100%"
};


//Calculate the zoom level depending on the size (area) of the country
const calculateZoomLevel = (area) => {
  if (area < 10000) { 
    return 9; // Very small countries
  } else if (area < 500000) { 
    return 5; // Medium-sized countries
  } else { 
    return 3; // Large countries
  }
};

// Component to render the map with a marker for the country
const MapComponent = ({ lat, lng, area }) => {
  const center = { lat, lng };
  const zoomLevel = calculateZoomLevel(area);

    // Google Map with a single marker
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={zoomLevel}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

// Main App component
function App() {
  const [country, setCountry] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);

 // Handle input changes for the country search
  const handleInputChange = (event) => {
    setCountry(event.target.value);
  };

      const baseUrl = process.env.REACT_APP_BASE_URL;
console.log(baseUrl);

 // Function to handle the submission of the country search
  const handleSubmit = async () => {

    if (!country) {
      alert('Please enter a country name.');
      return;
    }



    setLoading(true);
    try {    // Fetch country information from the backend
      const response = await fetch(`${baseUrl}/country/${country}`);
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
 
      // Find an exact match or the first returned country
      const exactMatch = data.find(c => c.name.common.toLowerCase() === country.toLowerCase());
      setCountryInfo(exactMatch || data[0]);

    } catch (error) {
      console.error('There was a problem with the fetch request:', error);
      alert('There was an error fetching the country information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Display the native name of the country
  const displayNativeName = (nativeNames) => {
    const firstNativeName = nativeNames[Object.keys(nativeNames)[0]];
    return firstNativeName ? `${firstNativeName.official} (${firstNativeName.common})` : 'Not available';
  };

   // Display the country's currencies
  const displayCurrencies = (currencies) => {
    if (!currencies) return 'Not available';
    return Object.values(currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ');
  };

 // Main render method for the App component
  return ( // Load the Google Maps script
    <LoadScript googleMapsApiKey = {process.env.REACT_APP_MAPS_API_KEY} >
      <div className="App">
        <header className="App-header">
          <input
            type="text"
            value={country}
            onChange={handleInputChange}
            placeholder="Enter country name"
          />
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Loading...' : 'Search Country'}
          </button>

          
        {countryInfo && (
          <div className="country-info">
           <h2>Country Information: {countryInfo.name.common}</h2>
           <MapComponent lat={countryInfo.latlng[0]} lng={countryInfo.latlng[1]} area={countryInfo.area} />
<p><strong>Official Name:</strong> {countryInfo.name.official}</p>
<p><strong>Native Name:</strong> {displayNativeName(countryInfo.name.nativeName)}</p>
<p><strong>Flag:</strong> <img src={countryInfo.flags.png} alt={`Flag of ${countryInfo.name.common}`} style={{ maxWidth: '100px' }} /></p>
<p><strong>Capital:</strong> {countryInfo.capital?.join(', ') || 'Not available'}</p>
<p><strong>Population:</strong> {countryInfo.population}</p>
<p><strong>Region:</strong> {countryInfo.region}</p>
<p><strong>Subregion:</strong> {countryInfo.subregion}</p>
<p><strong>Area:</strong> {countryInfo.area} km²</p>
<p><strong>Languages:</strong> {Object.values(countryInfo.languages || {}).join(', ') || 'Not available'}</p>
<p><strong>Demonyms:</strong> English - {countryInfo.demonyms.eng?.f} (Female), {countryInfo.demonyms.eng?.m} (Male)</p>
<p><strong>Currency:</strong> {displayCurrencies(countryInfo.currencies)}</p>
<p><strong>Independent:</strong> {countryInfo.independent ? 'Yes' : 'No'}</p>
<p><strong>UN Member:</strong> {countryInfo.unMember ? 'Yes' : 'No'}</p>
<p><strong>Status:</strong> {countryInfo.status}</p>
<p><strong>IDD Root and Suffixes:</strong> {countryInfo.idd.root} {countryInfo.idd.suffixes?.join(', ')}</p>
<p><strong>Borders:</strong> {countryInfo.borders?.join(', ') || 'Not available'}</p>
<p><strong>Car Signs and Side:</strong> {countryInfo.car.signs?.join(', ')}, Side: {countryInfo.car.side}</p>
<p><strong>Timezones:</strong> {countryInfo.timezones.join(', ')}</p>
<p><strong>Continents:</strong> {countryInfo.continents.join(', ')}</p>
<p><strong>Coat of Arms:</strong> <img src={countryInfo.coatOfArms.png} alt={`Coat of arms of ${countryInfo.name.common}`} style={{ maxWidth: '100px' }} /></p>
<p><strong>Google Maps:</strong> <a href={countryInfo.maps.googleMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
<p><strong>OpenStreetMap:</strong> <a href={countryInfo.maps.openStreetMaps} target="_blank" rel="noopener noreferrer">View on OpenStreetMap</a></p>
<p><strong>Top-Level Domain (TLD):</strong> {countryInfo.tld.join(', ')}</p>
<p><strong>Gini Index:</strong> {countryInfo.gini?.['2018'] || 'Not available'}</p>
<p><strong>FIFA Code:</strong> {countryInfo.fifa}</p>
<p><strong>Start of Week:</strong> {countryInfo.startOfWeek}</p>
<p><strong>Postal Code Format:</strong> {countryInfo.postalCode?.format || 'Not available'}</p>
          </div>
        )}
      </header>
    </div>
    </LoadScript>
  );
}


export default App;

