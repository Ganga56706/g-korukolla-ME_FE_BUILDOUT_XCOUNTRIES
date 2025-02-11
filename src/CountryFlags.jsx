import React, { useEffect, useState } from "react";

const CountryFlags = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setCountries(data);
            } catch (err) {
                console.error("Error fetching data: ", err);
                setError("Failed to load countries.");
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "20px", overflowY: "auto", maxHeight: "90vh" }}>
            {countries.map((country, index) => (
                <div key={index} style={{ textAlign: "center", width: "150px", border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
                    <img src={country.flag} alt={`Flag of ${country.name}`} style={{ width: "100px", height: "60px" }} />
                    <p>{country.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CountryFlags;
