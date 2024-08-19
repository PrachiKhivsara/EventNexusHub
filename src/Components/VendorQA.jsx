import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const VendorQA = () => {
  const { vendor } = useAuth();
  const vendorType = useState(vendor.vendorType);
  const [venueData, setVenueData] = useState({
    venueName: "",
    venueDescription: "",
    address: "",
    price: "",
    priceDescription: "",
    features: [{ featureName: "", featureDescription: "" }],
  });

  // useEffect(() => {
  //   // Fetch the vendor type after login
  //   axios
  //     .get("/api/v1/vendor")
  //     .then((response) => {
  //       const vendor = response.data;
  //       setVendorType(vendor.vendorType);
  //       if (vendor.vendorType === "venue" && vendor.venue) {
  //         setVenueData(vendor.venue);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching vendor data:", error);
  //     });
  // console.log(vendorType);
  // }, []);

  const handleVenueChange = (e) => {
    const { name, value } = e.target;
    setVenueData({ ...venueData, [name]: value });
  };

  const handleFeatureChange = (index, e) => {
    const { name, value } = e.target;
    const newFeatures = venueData.features.map((feature, i) => {
      if (i === index) {
        return { ...feature, [name]: value };
      }
      return feature;
    });
    setVenueData({ ...venueData, features: newFeatures });
  };

  const addFeature = () => {
    setVenueData({
      ...venueData,
      features: [
        ...venueData.features,
        { featureName: "", featureDescription: "" },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { vendorType, venue: venueData };
    axios
      .post("/api/v1/vendors/update", data)
      .then((response) => {
        console.log("Vendor profile updated", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the vendor profile!", error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Vendor Profile</h2>
      <form onSubmit={handleSubmit}>
        {vendorType === "venue" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Venue Name
              </label>
              <input
                type="text"
                name="venueName"
                value={venueData.venueName}
                onChange={handleVenueChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Venue Description
              </label>
              <textarea
                name="venueDescription"
                value={venueData.venueDescription}
                onChange={handleVenueChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={venueData.address}
                onChange={handleVenueChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={venueData.price}
                onChange={handleVenueChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price Description
              </label>
              <textarea
                name="priceDescription"
                value={venueData.priceDescription}
                onChange={handleVenueChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            {venueData.features.map((feature, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Feature Name
                </label>
                <input
                  type="text"
                  name="featureName"
                  value={feature.featureName}
                  onChange={(e) => handleFeatureChange(index, e)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
                <label className="block text-sm font-medium text-gray-700 mt-2">
                  Feature Description
                </label>
                <textarea
                  name="featureDescription"
                  value={feature.featureDescription}
                  onChange={(e) => handleFeatureChange(index, e)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="mt-2 p-2 bg-blue-500 text-white rounded-md"
            >
              Add Feature
            </button>
          </>
        )}
        <button
          type="submit"
          className="mt-4 p-2 bg-green-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VendorQA;
