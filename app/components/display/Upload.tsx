import { useState, useMemo } from 'react'

const TYPES = {
  'image/png': 'image',
  'image/jpeg': 'image',
  'image/jpg': 'image',
  'image/webp': 'image',
  'image/gif': 'image',
  'video/mp4': 'video',
  'video/quicktime': 'video',
  'video/mov': 'video'
}

export default function FileUpload(props) {
  const {
    value,
    onChange,
    label,
    sublabel,
    maxSize = 40000000,
    acceptTypes = 'image/*,.mp4,.mov',
    description = 'PNG, GIF, WEBP or MP4.',
    isMultiple = false,
    hasPreview = true
  } = props

  const [sizeReached, setSizeReached] = useState(false)

  const [id] = useState(Math.random().toString(36))

  const onFileChange = (e) => {
    const file = e?.target?.files ? e.target.files[0] : null
    if (file && maxSize && file.size >= maxSize) {
      return setSizeReached(true)
    }
    setSizeReached(false)
    onChange(e)
  }

  const assetPreview = (asset) => {
    if (!asset) return null
    const type = TYPES[asset?.type] || 'image'
    const previewClass = 'w-full max-w-max	border-black rounded border flex-grow max-h-96'

    return type === 'image' ? (
      <img src={asset && URL.createObjectURL(asset)} alt='preview-unlockable' className={previewClass} />
    ) : (
      <video autoPlay muted loop playsInline src={asset && URL.createObjectURL(asset)} className={previewClass}></video>
    )
  }

  const preview = useMemo(() => {
    return assetPreview(value)
  }, [value])

  const isGb = maxSize && maxSize >= 1000000000

  return (
    <div className={`my-4 w-full flex flex-col`}>
      <div className='mb-2'>{label}</div>
      {!preview && sublabel && <div className='text-gtxt text-sm mb-4'>{sublabel}</div>}

      {hasPreview && (
        <>
          {preview || (
            <label
              htmlFor={id}
              className='w-full h-40 rounded bg-g text-gtxt flex-grow flex flex-col items-center justify-center cursor-pointer '
            >
              <img src='/images/upload.svg' alt='file-upload-icon' />
              {`${description} Max ${new Intl.NumberFormat('en-US', {
                style: 'unit',
                unit: isGb ? 'gigabyte' : 'megabyte',
                maximumSignificantDigits: isGb ? 2 : 1,
                unitDisplay: 'short'
              }).format(maxSize / (isGb ? 1000000000 : 1000000))}`}
            </label>
          )}
          {preview && (
            <p className='mt-4 text-sm text-primary hover:underline' onClick={onChange}>
              Remove
            </p>
          )}
        </>
      )}

      <input
        type='file'
        name='file'
        multiple={isMultiple}
        id={id}
        onChange={onFileChange}
        className='hidden'
        accept={acceptTypes}
      />

      {sizeReached && (
        <p className='text-red mt-2'>
          File size must be maximum of{' '}
          {new Intl.NumberFormat('en-US', {
            style: 'unit',
            unit: isGb ? 'gigabyte' : 'megabyte',
            maximumSignificantDigits: isGb ? 2 : 1,
            unitDisplay: 'short'
          }).format(maxSize / (isGb ? 1000000000 : 1000000))}
        </p>
      )}
    </div>
  )
}
