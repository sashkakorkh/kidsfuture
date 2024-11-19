const getBackgroundImage = (imagePng, imageWebp, gradient = '') => {
  if (!imagePng || !imageWebp) {
    throw new Error('Image must include both WebP and PNG versions');
  }

  return `
    ${gradient}, 
    image-set(
      url(${imageWebp.src}) type("image/webp"), 
      url(${imagePng.src}) type("image/png")
    )
  `;
};

export default getBackgroundImage;
