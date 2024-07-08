import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const BusinessCard = ({ business }) => {
  return (
    <motion.div
        whileHover={{ scale: 1.05 }} 
        className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
        >
            <Link to={`/business/${business.id}`}>
                <h2 className="text-xl font-bold">{business.name}</h2>
                <p>{business.description}</p>
                <p className="text-sm text-gray-600">{business.category}</p>
            </Link>
    </motion.div>
  );
};

export default BusinessCard;
