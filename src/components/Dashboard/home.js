import { useRef } from 'react'
import { auth, storage, db } from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore/lite'
// import portfolio from '../Portfolio'

const Home = () => {
  const form = useRef()

  const submitPortfolio = (e) => {
    e.preventDefault()
    // The '?' is to ensure there is no break in the value
    const name = form.current[0]?.value
    // Selecting the 2nd item on the form
    const description = form.current[1]?.value
    // Selecting the third item inputed on the form
    const url = form.current[2]?.value
    // This is selecting the 4th item in the array and then the 1st file that is uploaded
    const image = form.current[3]?.files[0]

    // console.log(name, description, url, image)

    // This is to get the image and the image was successfully downloaded to page
    const storageRef = ref(storage, `portfolio/${image.name}`)
    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              name,
              description,
              url,
              image: downloadUrl,
            })
            // This is if there is an "ERROR" in the 'f(x)'
          },
          (error) => {
            savePortfolio({
              name,
              description,
              url,
              image: null,
            })
          }
        )
        // This is if the upload from above is Unsuccessful "ERROR"
      },
      (error) => {
        savePortfolio({
          name,
          description,
          url,
          image: null,
        })
      }
    )
  }

  // This saves the current "PortfolioProject" you uploaded to 'Dashboard'
  const savePortfolio = async (portfolio) => {
    try {
      await addDoc(collection(db, 'portfolio'), portfolio)
      window.location.reload(false)
    } catch (error) {
      alert('Failed to add portfolio')
    }
  }

  return (
    <div className="dash-home">
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <textarea placeholder="Description" />
        </p>
        <p>
          <input type="text" placeholder="URL" />
        </p>
        <p>
          <input type="file" placeholder="Image" />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut}>Sign out</button>
      </form>
    </div>
  )
}

export default Home
