/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { SizeContext } from '../contexts/SizeContext';
import { getImageUrl } from '../utils/getImageUrl';

export default function PlaceImage({ place }) {
  const imageSize = useContext(SizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
