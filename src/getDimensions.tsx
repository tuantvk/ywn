type Dimensions = {
  width?: number;
  height?: number;
}


export default function getDimensions(
  dimensions: string
): Dimensions {

  let value = dimensions.split('x');

  return {
    width: parseInt(value[0]) || 0,
    height: parseInt(value[1]) || 0,
  };
}