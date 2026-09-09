import type { Collection, Photo } from "./types"

// Collection format mapping
const collectionFormats: Record<string, string> = {
  'documentary': 'webp',
  'aerial': 'webp',
  'commercial': 'webp',
  'specialist-factual': 'webp',
  'camera-operating': 'webp',
  'behind-the-scenes': 'webp'
} as const

// Collection folder name mapping
const collectionFolders: Record<string, string> = {
  'documentary': 'documentary',
  'aerial': 'aerial',
  'commercial': 'commercial',
  'specialist-factual': 'specialist-factual',
  'camera-operating': 'camera-operating',
  'behind-the-scenes': 'behind-the-scenes'
} as const

// Collection image counts and formats
export const collectionImages: Record<string, { count: number; formats: string[] }> = {
  'documentary': {
    count: 3,
    formats: ['webp']
  },
  'aerial': {
    count: 3,
    formats: ['webp']
  },
  'commercial': {
    count: 3,
    formats: ['webp']
  },
  'specialist-factual': {
    count: 3,
    formats: ['webp']
  },
  'camera-operating': {
    count: 3,
    formats: ['webp']
  },
  'behind-the-scenes': {
    count: 3,
    formats: ['webp']
  }
} as const

// Camera metadata presets for cinema cinematography
const metadataByCollection: Record<string, { camera: string; lens: string; aperture: string; shutterSpeed: string; iso: string; focalLength: string; takenAt: string }> = {
  'documentary': {
    camera: "Sony FX6 Cinema Line",
    lens: "Sony FE PZ 28-135mm f/4 G OSS",
    aperture: "T4.0",
    shutterSpeed: "1/50 (180° shutter)",
    iso: "800 Base ISO",
    focalLength: "35mm",
    takenAt: "Concept Spec",
  },
  'aerial': {
    camera: "DJI Inspire 3 / Zenmuse X9-8K Air",
    lens: "DL 24mm F2.8 LS ASPH",
    aperture: "f/4.0",
    shutterSpeed: "1/50 (180° shutter)",
    iso: "800 Base ISO",
    focalLength: "24mm",
    takenAt: "Concept Spec",
  },
  'commercial': {
    camera: "ARRI Alexa Mini LF",
    lens: "Cooke Anamorphic /i Full Frame Plus 40mm",
    aperture: "T2.3",
    shutterSpeed: "1/48 (180° shutter)",
    iso: "800",
    focalLength: "40mm Anamorphic",
    takenAt: "Concept Spec",
  },
  'specialist-factual': {
    camera: "Sony FX9 Full-Frame",
    lens: "Canon Cinema 50-1000mm T5.0-8.9",
    aperture: "T5.6",
    shutterSpeed: "1/100 (High Speed Factual)",
    iso: "800 Base ISO",
    focalLength: "650mm",
    takenAt: "Concept Spec",
  },
  'camera-operating': {
    camera: "ARRI Alexa 35 / Easyrig Vario 5",
    lens: "ARRI Master Prime 35mm T1.3",
    aperture: "T2.0",
    shutterSpeed: "1/48 (180° shutter)",
    iso: "800",
    focalLength: "35mm",
    takenAt: "Concept Spec",
  },
  'behind-the-scenes': {
    camera: "Production Still / Sony A7S III",
    lens: "Sony FE 24-70mm f/2.8 GM II",
    aperture: "f/2.8",
    shutterSpeed: "1/125",
    iso: "1600",
    focalLength: "50mm",
    takenAt: "Concept Spec",
  }
}

// Function to get images for a collection
function getCollectionImages(collectionSlug: string): Photo[] {
  const folderName = collectionFolders[collectionSlug]
  if (!folderName) return []

  const collectionInfo = collectionImages[collectionSlug]
  if (!collectionInfo) return []
  
  const meta = metadataByCollection[collectionSlug] || {
    camera: "Cinema Rig",
    lens: "Cinema Prime",
    aperture: "T2.8",
    shutterSpeed: "1/50",
    iso: "800",
    focalLength: "35mm",
    takenAt: "Concept Spec",
  }

  return Array.from({ length: collectionInfo.count }, (_, i) => {
    const index = i + 1
    const imagePath = `/${folderName}/${collectionSlug}-${index}.webp`

    return {
      id: `${collectionSlug}-${index}`,
      src: imagePath,
      width: 1920,
      height: 1080,
      alt: `${collectionSlug.replace(/-/g, ' ')} conceptual frame ${index} - Nick Gaven portfolio concept`,
      metadata: meta,
    }
  })
}

// Collections data
const collections: Collection[] = [
  {
    id: "documentary",
    slug: "documentary",
    title: "Documentary",
    description: "Observational cinematography in demanding, remote environments",
    fullDescription:
      "Capturing authentic human narrative and raw natural elements through responsive camera operating. Concept portfolio imagery demonstrating handheld, shoulder-mount, and run-and-gun cinema techniques built for observational documentary workflows.",
    coverImage: "/documentary/cover.webp",
    tags: ["Documentary", "Handheld", "Factual"],
    featured: true,
    photos: getCollectionImages("documentary"),
  },
  {
    id: "aerial",
    slug: "aerial",
    title: "Aerial Cinematography",
    description: "Precision heavy-lift and dual-operator drone cinematography",
    fullDescription:
      "Comprehensive aerial perspective from ground to air. Spec concept sequences highlighting high-altitude tracking, dynamic reveal flights, and precision low-altitude pathing tailored for narrative drama and commercial productions.",
    coverImage: "/aerial/cover.webp",
    tags: ["Aerial", "Drone", "Landscape"],
    featured: true,
    photos: getCollectionImages("aerial"),
  },
  {
    id: "commercial",
    slug: "commercial",
    title: "Commercial",
    description: "High-end studio, automotive, and stylized lighting setups",
    fullDescription:
      "Controlled studio environments, precision motion tracks, and sculpted lighting. Concept portfolio visuals exploring commercial aesthetics, automotive stage work, and high-impact visual design.",
    coverImage: "/commercial/cover.webp",
    tags: ["Commercial", "Studio", "Lighting"],
    featured: true,
    photos: getCollectionImages("commercial"),
  },
  {
    id: "specialist-factual",
    slug: "specialist-factual",
    title: "Specialist Factual",
    description: "Extreme telephoto, macro, and natural history camera operations",
    fullDescription:
      "Specialized setups for natural history, science, and long-lens observational filming. Prepared for hide operations, extreme patience, and demanding field environments.",
    coverImage: "/specialist-factual/cover.webp",
    tags: ["Specialist Factual", "Long Lens", "Natural History"],
    featured: true,
    photos: getCollectionImages("specialist-factual"),
  },
  {
    id: "camera-operating",
    slug: "camera-operating",
    title: "Camera Operating",
    description: "Steadicam, gimbal systems, Easyrig, and handheld operating",
    fullDescription:
      "Dynamic movement supporting dramatic narrative flow. From intricate Steadicam tracking shots to textured handheld and stabilized gimbal rigs, keeping the storytelling centered in the frame.",
    coverImage: "/camera-operating/cover.webp",
    tags: ["Camera Operating", "Steadicam", "Easyrig"],
    featured: true,
    photos: getCollectionImages("camera-operating"),
  },
  {
    id: "behind-the-scenes",
    slug: "behind-the-scenes",
    title: "Behind The Scenes",
    description: "Camera prep, wireless focus integration, and soundstage workflows",
    fullDescription:
      "The craft behind the camera. 1st AC / 2nd AC camera assistant preparation, wireless video distribution, optical calibration, and collaborative technical workflows on soundstages and field locations.",
    coverImage: "/behind-the-scenes/cover.webp",
    tags: ["Behind The Scenes", "Camera Prep", "1st AC"],
    featured: true,
    photos: getCollectionImages("behind-the-scenes"),
  },
]

// Export functions
export const getAllCollections = (): Collection[] => collections
export const getFeaturedCollections = (): Collection[] => collections.filter(collection => collection.featured)
export const getCollection = (slug: string): Collection | undefined => collections.find(collection => collection.slug === slug)
export const getAllTags = (): string[] => Array.from(new Set(collections.flatMap(collection => collection.tags)))
