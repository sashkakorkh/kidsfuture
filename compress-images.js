import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public/imagesForNews');
const outputPath = path.join(process.cwd(), 'public/imagesForNews/compressed');

async function compressImages() {
  await imagemin([`${inputPath}/*.{jpg,png}`], {
    destination: outputPath,
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
      imageminWebp({ quality: 75 }),
    ],
  });

  console.log('Images compressed successfully!');
}

compressImages();
