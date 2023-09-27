import viteLogo from './src/assets/vite.svg?raw';

console.log('Raw SVG', viteLogo);

const img = new Image();

const app = document.querySelector('#app');
app.appendChild(img);

const main = async () => {
  const blobUrl =
    'data:image/svg+xml;base64,' +
    btoa(decodeURIComponent(encodeURIComponent(viteLogo)));

  console.log(blobUrl);
  let canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  img.src = blobUrl;

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;

    console.log(
      ' natural w and h after onload',
      img.naturalWidth,
      img.naturalHeight
    );
    console.log('w and h after onload', img.width, img.height);
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL();
  };
  img.onerror = () => {
    throw new Error('Error loading image');
  };

  // Log the naturalWidth and naturalHeight before the image has loaded
  console.log(
    'natural w and h before onload',
    img.naturalWidth,
    img.naturalHeight
  );
  console.log('w and h before onload', img.width, img.height);
};

main();
// width="31.88" height="32"
