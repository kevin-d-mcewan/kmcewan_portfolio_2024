import React, { useState } from 'react'
//import { auth, storage, db } from '../../firebase'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
 // uploadBytes,
} from 'firebase/storage'
import { getFirestore, addDoc, serverTimestamp } from 'firebase/firestore'
import { collection } from 'firebase/firestore/lite'
import './index.scss'

export default function UploadItem() {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDiscription] = useState('')
  const [progress, setProgress] = useState(0)

  const storage = getStorage()
  const db = getFirestore()

  const handleUpload = async () => {
    if (!file || !title || !description) return alert('Fill all fields!')

    const fileRef = ref(storage, `portfolio/${file.name}`) // said 'uploads' prior to 'portfolio'
    const uploadTask = uploadBytesResumable(fileRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(prog.toFixed(0))
      },
      (error) => console.error(error),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref)

        // Save metadata in Firestore
        await addDoc(collection(db, 'items'), {
          title,
          description,
          imageURL: url,
          createdAt: serverTimestamp(),
        })

        setFile(null)
        setTitle('')
        setDiscription('')
        setProgress(0)
        alert('Item uploaded successfully!')
      }
    )
  }

  return (
    <div className="upload-container">
      <h2>Upload Item</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br />
      <br />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDiscription(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleUpload}>Upload</button>

      {progress > 0 && progress < 100 && <p>Uploading: {progress}%</p>}
    </div>
  )
}
