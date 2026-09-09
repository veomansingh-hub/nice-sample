const fs = require('fs');
const path = require('path');

// Collection image counts and formats
const collectionImages: Record<string, { count: number; formats: string[] }> = {
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
}

// Collection format mapping for cover images
const collectionFormats: Record<string, string> = {
  'documentary': 'webp',
  'aerial': 'webp',
  'commercial': 'webp',
  'specialist-factual': 'webp',
  'camera-operating': 'webp',
  'behind-the-scenes': 'webp'
}

// Collection folder name mapping
const collectionFolders: Record<string, string> = {
  'documentary': 'documentary',
  'aerial': 'aerial',
  'commercial': 'commercial',
  'specialist-factual': 'specialist-factual',
  'camera-operating': 'camera-operating',
  'behind-the-scenes': 'behind-the-scenes'
}

interface ValidationResult {
  hasErrors: boolean
  hasWarnings: boolean
  totalImages: number
  validatedImages: number
  errors: string[]
  warnings: string[]
}

function validateImages(dryRun: boolean = false): ValidationResult {
  const publicDir = path.join(process.cwd(), 'public')
  const result: ValidationResult = {
    hasErrors: false,
    hasWarnings: false,
    totalImages: 0,
    validatedImages: 0,
    errors: [],
    warnings: []
  }

  console.log('🔍 Starting image validation for Nick Gaven categories...')
  if (dryRun) {
    console.log('⚠️  Running in dry-run mode - will not fail the build\n')
  }

  // Check each collection
  Object.entries(collectionImages).forEach(([slug, info]) => {
    const folderName = collectionFolders[slug]
    console.log(`\n📁 Checking collection: ${folderName}`)
    
    const collectionDir = path.join(publicDir, folderName)
    
    // Check if collection directory exists
    if (!fs.existsSync(collectionDir)) {
      const error = `Collection directory missing: ${folderName}`
      result.errors.push(error)
      console.error(`❌ ${error}`)
      result.hasErrors = true
      return
    }

    // Check cover image
    const coverFormat = collectionFormats[slug]
    const coverPath = path.join(collectionDir, `cover.${coverFormat}`)
    if (!fs.existsSync(coverPath)) {
      const error = `Cover image missing: ${folderName}/cover.${coverFormat}`
      result.errors.push(error)
      console.error(`❌ ${error}`)
      result.hasErrors = true
    } else {
      console.log(`✅ Cover image found: ${folderName}/cover.${coverFormat}`)
      result.validatedImages++
    }

    // Check collection images
    for (let i = 1; i <= info.count; i++) {
      result.totalImages++
      let imageExists = false
      let foundFormat = ''
      
      for (const format of info.formats) {
        const imagePath = path.join(collectionDir, `${slug}-${i}.${format}`)
        if (fs.existsSync(imagePath)) {
          imageExists = true
          foundFormat = format
          break
        }
      }

      if (!imageExists) {
        const error = `Image missing: ${folderName}/${slug}-${i}.${info.formats[0]}`
        result.errors.push(error)
        console.error(`❌ ${error}`)
        result.hasErrors = true
      } else {
        result.validatedImages++
      }
    }
  })

  // Print summary
  console.log('\n📊 Validation Summary:')
  console.log(`Total images checked: ${result.totalImages}`)
  console.log(`Images validated: ${result.validatedImages}`)
  console.log(`Missing images: ${result.totalImages - result.validatedImages}`)
  
  if (result.hasWarnings) {
    console.log(`\n⚠️  Warnings: ${result.warnings.length}`)
    result.warnings.forEach(warning => console.log(`  - ${warning}`))
  }

  if (result.hasErrors) {
    console.log(`\n❌ Errors: ${result.errors.length}`)
    result.errors.forEach(error => console.log(`  - ${error}`))
    
    if (!dryRun) {
      console.error('\n❌ Image validation failed. Please fix the missing images before deploying.')
      process.exit(1)
    } else {
      console.log('\n⚠️  Dry run completed with errors. Build will continue.')
    }
  } else {
    console.log('\n✅ All Nick Gaven concept images validated successfully!')
  }

  return result
}

// Parse command line arguments
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')

// Run the validation
validateImages(dryRun)