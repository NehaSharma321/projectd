import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DisasterDetail.css';

const DisasterDetail = () => {
  const { id } = useParams(); // Get the disaster ID from the URL
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API URL
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://api.example.com/disasters/${id}`);
        const data = await response.json();
        setDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching disaster details:', error);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="disaster-detail">
      <h2>{details.name} Prevention Resources</h2>
      <p>{details.description}</p>
      <ul>
        {details.resources.map((resource, index) => (
          <li key={index}>{resource}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisasterDetail;
