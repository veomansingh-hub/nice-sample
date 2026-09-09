const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = '/Users/mansingh/.gemini/antigravity/brain/049c24db-c181-4cc9-994f-a6115dba771e';
const publicDir = path.join(__dirname, '..', 'public');

const imageMap = {
  hero_camera: 'hero_camera_rig_1788962142137.jpg',
  portrait: 'nick_concept_portrait_1788962164014.jpg',
  drone_scene: 'drone_cinema_scene_1788962200621.jpg',
  documentary: 'cat_documentary_1788962219704.jpg',
  aerial_highway: 'cat_aerial_1788962240116.jpg',
  commercial: 'cat_commercial_1788962276765.jpg',
  specialist: 'cat_specialist_1788962410345.jpg',
  operating: 'cat_operating_1788962434153.jpg',
  bts: 'cat_bts_1788962461870.jpg',
  abstract: 'cinematic_abstract_frame_1788962493179.jpg',
  aerial_ridge: 'aerial_dramatic_ridge_1788962523195.jpg',
  focus_puller: 'focus_puller_monitor_1788962622262.jpg',
  steadicam: 'steadicam_operator_set_1788962650698.jpg',
};

// Target distribution
const targets = [
  // Nick branding & hero
  { src: imageMap.portrait, dest: 'nick/portrait.webp', width: 1200, height: 1600 },
  { src: imageMap.hero_camera, dest: 'nick/hero-camera.webp', width: 1920, height: 1080 },
  { src: imageMap.drone_scene, dest: 'nick/hero-drone.webp', width: 1920, height: 1080 },
  { src: imageMap.operating, dest: 'nick/hero-operating.webp', width: 1920, height: 1080 },
  { src: imageMap.steadicam, dest: 'nick/hero-steadicam.webp', width: 1920, height: 1080 },

  // Documentary
  { src: imageMap.documentary, dest: 'documentary/cover.webp', width: 1920, height: 1080 },
  { src: imageMap.documentary, dest: 'documentary/documentary-1.webp', width: 1920, height: 1080 },
  { src: imageMap.aerial_ridge, dest: 'documentary/documentary-2.webp', width: 1920, height: 1080 },
  { src: imageMap.abstract, dest: 'documentary/documentary-3.webp', width: 1920, height: 1080 },

  // Aerial
  { src: imageMap.drone_scene, dest: 'aerial/cover.webp', width: 1920, height: 1080 },
  { src: imageMap.aerial_highway, dest: 'aerial/aerial-1.webp', width: 1920, height: 1080 },
  { src: imageMap.aerial_ridge, dest: 'aerial/aerial-2.webp', width: 1920, height: 1080 },
  { src: imageMap.drone_scene, dest: 'aerial/aerial-3.webp', width: 1920, height: 1080 },

  // Commercial
  { src: imageMap.commercial, dest: 'commercial/cover.webp', width: 1920, height: 1080 },
  { src: imageMap.commercial, dest: 'commercial/commercial-1.webp', width: 1920, height: 1080 },
  { src: imageMap.steadicam, dest: 'commercial/commercial-2.webp', width: 1920, height: 1080 },
  { src: imageMap.abstract, dest: 'commercial/commercial-3.webp', width: 1920, height: 1080 },

  // Specialist Factual
  { src: imageMap.specialist, dest: 'specialist-factual/cover.webp', width: 1920, height: 1080 },
  { src: imageMap.specialist, dest: 'specialist-factual/specialist-factual-1.webp', width: 1920, height: 1080 },
  { src: imageMap.aerial_ridge, dest: 'specialist-factual/specialist-factual-2.webp', width: 1920, height: 1080 },
  { src: imageMap.focus_puller, dest: 'specialist-factual/specialist-factual-3.webp', width: 1920, height: 1080 },

  // Camera Operating
  { src: imageMap.operating, dest: 'camera-operating/cover.webp', width: 1920, height: 1080 },
  { src: imageMap.operating, dest: 'camera-operating/camera-operating-1.webp', width: 1920, height: 1080 },
  { src: imageMap.steadicam, dest: 'camera-operating/camera-operating-2.webp', width: 1920, height: 1080 },
  { src: imageMap.hero_camera, dest: 'camera-operating/camera-operating-3.webp', width: 1920, height: 1080 },

  // Behind The Scenes
  { src: imageMap.bts, dest: 'behind-the-scenes/cover.webp', width: 1920, height: 1080 },
  { src: imageMap.bts, dest: 'behind-the-scenes/behind-the-scenes-1.webp', width: 1920, height: 1080 },
  { src: imageMap.focus_puller, dest: 'behind-the-scenes/behind-the-scenes-2.webp', width: 1920, height: 1080 },
  { src: imageMap.commercial, dest: 'behind-the-scenes/behind-the-scenes-3.webp', width: 1920, height: 1080 },
];

async function run() {
  console.log('Processing concept images...');
  for (const item of targets) {
    const inputPath = path.join(brainDir, item.src);
    const outputPath = path.join(publicDir, item.dest);
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`Converting ${item.src} -> ${item.dest}...`);
    await sharp(inputPath)
      .resize(item.width, item.height, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(outputPath);
  }
  console.log('All concept images processed successfully!');
}

run().catch(err => {
  console.error('Error processing images:', err);
  process.exit(1);
});
