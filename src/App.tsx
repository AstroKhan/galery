import { ArtGalery } from "./ArtGalery"

function App() {

  return (
    <div className="App">
        <ArtGalery photos={[
          {id: 1, src: "./photos/1.jpg", preview: "./photos/preview/1.jpg",
          description: 'rice field'},
          {id: 2, src: "./photos/2.jpg", preview: "./photos/preview/2.jpg",
          description: 'rice field2'},
          {id: 3, src: "./photos/3.jpg", preview: "./photos/preview/3.jpg",
          description: 'witch house'},
          {id: 4, src: "./photos/4.jpg", preview: "./photos/preview/4.jpg",
          description: 'green label'},
          {id: 5, src: "./photos/5.jpg", preview: "./photos/preview/5.jpg",
          description: 'beach 300 years'},
          {id: 6, src: "./photos/6.jpg", preview: "./photos/preview/6.jpg",
          description: 'my dance'},
        ]}/>
    </div>
  )
}

export default App
