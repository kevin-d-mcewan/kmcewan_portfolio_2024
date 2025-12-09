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
    <div className="project-slider-wrapper fade-in">
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          gap: '2rem',
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
      >
        {projects.map((project, index) => (
          <SplideSlide key={index}>
            <div className="glass-card hover-anim">
              {/* Inner image slider */}
              <Splide
                options={{
                  type: 'loop',
                  perPage: 1,
                  arrows: true,
                  pagination: true,
                }}
              >
                {project.images.map((src, i) => (
                  <SplideSlide key={i}>
                    <img src={src} alt="" className="card-img" />
                  </SplideSlide>
                ))}
              </Splide>

              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
