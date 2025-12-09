import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './ProjectSlider.css'

export default function ProjectSlider() {
  const projects = [
    {
      title: 'Baseball Quiz',
      description: 'See other info',
      images: [
        '../../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_CorrectAnswer.svg',
        '../../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_FinalScore.svg',
        '../../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_Ques1.svg',
        '../../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_WrongAnswer.png',
      ],
    },
    {
      title: 'Snow Carver',
      description: 'See another info on the game',
      image: [
        '../../assets/images/project_images/SnowCarver_Game/Snow_Carver_SS1.png',
        '../../assets/images/project_images/SnowCarver_Game/Snow_Carver_SS2.png',
        '../../assets/images/project_images/SnowCarver_Game/Snow_Carver_SS3.png',
      ],
    },
    {
      title: 'Astroid Avoider',
      description: 'See another info on game',
      image: [
        '../../assets/images/project_images/AstroidAvoider_Unity_Game/Astroid_Avoider_UnityAndGameView.svg',
      ],
    },
    {
      title: 'Pitch Count Tracker',
      description: 'See another info on game',
      image: [
        '../../assets/images/project_images/PitchCountTracker_iOS_App/PCT_WatchOS_SimSS_2_SVG.svg',
        '../../assets/images/project_images/PitchCountTracker_iOS_App/PCT_WatchOS_SimSS_3_SVG.svg',
        '../../assets/images/project_images/PitchCountTracker_iOS_App/PCT_WatchOS_SimSS_4_SVG.svg',
        '../../assets/images/project_images/PitchCountTracker_iOS_App/TrackingPitchCount_Logo.svg',
      ],
    },
  ]

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <Splide
        options={{
          type: 'logo',
          perPage: 3,
          gap: '1rem',
          pagination: true,
          arrows: true,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
      >
        {projects.map((p, index) => (
          <SplideSlide key={index}>
            <div className="project-card">
              <img src={p.image} alt={p.title} className="project-img" />
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
