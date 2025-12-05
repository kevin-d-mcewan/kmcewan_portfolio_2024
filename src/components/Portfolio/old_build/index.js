import React, { useEffect, useState } from 'react'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore'
import './index.scss'

export default function ItemList() {
  const [items, setItems] = useState([])
  const db = getFirestore()

  useEffect(() => {
    const q = query(collection(db, 'items'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setItems(data)
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="portfolio-page">
      <h2>Uploaded Items</h2>
      {items.length === 0 && <p>No items yet.</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{ border: '1px solid #ccc', padding: 10, width: 250 }}
          >
            <img
              src={item.imageURL}
              alt={item.title}
              style={{ width: '100%', height: 150, objectFit: 'cover' }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
