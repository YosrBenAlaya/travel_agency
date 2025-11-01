import './Destinations.css'

function Destinations() {
  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Experience stunning sunsets and white-washed buildings',
      price: '$1,299'
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Tropical paradise with pristine beaches and rich culture',
      price: '$899'
    },
    {
      id: 3,
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Modern metropolis meets traditional culture',
      price: '$1,599'
    },
    {
      id: 4,
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'The City of Light awaits your discovery',
      price: '$1,199'
    },
    {
      id: 5,
      name: 'Maldives',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Crystal clear waters and overwater bungalows',
      price: '$2,499'
    },
    {
      id: 6,
      name: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Luxury and innovation in the desert',
      price: '$1,799'
    }
  ]

  return (
    <div className="destinations-page">
      <div className="page-header">
        <h1>Explore Our Destinations</h1>
        <p>Discover amazing places around the world</p>
      </div>
      
      <div className="destinations-grid">
        {destinations.map(destination => (
          <div key={destination.id} className="destination-card">
            <div className="destination-image">
              <img src={destination.image} alt={destination.name} />
              <div className="destination-overlay">
                <span className="destination-price">{destination.price}</span>
              </div>
            </div>
            <div className="destination-content">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <button className="destination-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinations

