import { useRef } from 'react'
import { auth, storage } from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const Home = () => {
  const form = useRef()

  const submitPortfolio = (e) => {
    e.preventDefault()
    // The '?' is to ensure there is no break in the value
    const name = form.current[0]?.value
    const description = form.current[1]?.value
    const url = form.current[2]?.value
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
          () => {
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
      () => {
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
  const savePortfolio = (portfolio) => {
    console.log(portfolio)
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
