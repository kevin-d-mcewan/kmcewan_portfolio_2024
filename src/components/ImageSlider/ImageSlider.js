import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/react-splide/css'
import Baseball1 from '../../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_CorrectAnswer.svg'
import Baseball2 from '../../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_FinalScore.svg'
import Baseball3 from '../../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_Ques1.svg'
import Baseball4 from '../../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_WrongAnswer.png'
import SnowCarver1 from '../../assets/images/project_images/SnowCarver_Game/Snow_Carver_SS1.png'
import SnowCarver2 from '../../assets/images/project_images/SnowCarver_Game/Snow_Carver_SS2.png'
import SnowCarver3 from '../../assets/images/project_images/SnowCarver_Game/Snow_Carver_SS3.png'
import AstroidAvoider1 from '../../assets/images/project_images/AstroidAvoider_Unity_Game/Astroid_Avoider_UnityAndGameView.png'
import PitchCT1 from '../../assets/images/project_images/PitchCountTracker_iOS_App/PCT_WatchOS_SimSS_2_SVG.svg'
import PitchCT2 from '../../assets/images/project_images/PitchCountTracker_iOS_App/PCT_WatchOS_SimSS_3_SVG.svg'
import PitchCT3 from '../../assets/images/project_images/PitchCountTracker_iOS_App/PCT_WatchOS_SimSS_4_SVG.svg'
import PitchCT4 from '../../assets/images/project_images/PitchCountTracker_iOS_App/TrackingPitchCount_Logo.svg'
import { TTB } from '@splidejs/splide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function ImageSlider() {
  const projects = [
    {
      title: 'Snow Carver',
      description:
        'A 2D snowboarding game made in Unity. The purpose of the game is to score as' +
        ' many points as possible before the character reaches the finish line.',
      technologies: 'C-Sharp, Unity, ShaderLab',
      images: [SnowCarver1, SnowCarver2, SnowCarver3],
      repo: 'https://github.com/kevin-d-mcewan/SnowCarver2D-Unity',
    },
    {
      title: 'Baseball Quiz',
      description:
        'A baseball quiz game made in Unity but Unity is just basically used for the visuals.' +
        " The Graphical User Interface is made with Unity's Text Mesh Pro. As for all the game" +
        ' logic and code it is done in C-Sharp.',
      technologies: 'C-Sharp, Unity',
      images: [Baseball1, Baseball2, Baseball3, Baseball4],
      repo: 'https://github.com/kevin-d-mcewan/Baseball-Quiz-3000',
    },
    {
      title: 'Pitch Count Tracker',
      description:
        'This is an app created for Apples App Store. This application was made as a stand alone ' +
        'watchOS app. This was decided because the  ability to keep track of pitches quickly and ' +
        'easily did not need an entire phone app as well. However, I plan on adding a more advanced ' +
        'version of this app that does integrate with iOS and not just watchOS. That way the user can ' +
        'keep more detailed statistics of their players.',
      technologies: 'iOS, watchOS, Swift, SwiftUI',
      images: [PitchCT1, PitchCT2, PitchCT3, PitchCT4],
      repo: 'https://github.com/kevin-d-mcewan/watchOS_PitchCountTracker',
    },
    {
      title: 'Astroid Avoider',
      description:
        "A 2.5D Spaceship game made in Unity. The game is made in Unity's 3D enviornment" +
        ' but in a 2D aspect. This was chosen to make the assets look more crisp. It also forced ' +
        'me to go about programming Unityin a different way then normal. All the code to make the ' +
        "game run behind the visuals is with C-Sharp. Unity's ShaderLab is used for the particle " +
        'system in the game to give it a more polished look. There is still many things that can ' +
        'be improved with this game but this was a good project.',
      technologies: 'C-Sharp, Unity, Shaderlab',
      images: [AstroidAvoider1],
      repo: 'https://github.com/kevin-d-mcewan/Mobile_StarshipFighter_2.5D',
    },
  ]

  return (
    <div
      className="project-holder"
      style={{ maxWidth: '1200px', margin: '0 auto', background: 'pink' }}
    >
      <Splide
        // TODO: Change Options
        options={{
          // we have for that project // May need to change some of the options per project. i.e. 'perPage: 3' to how many pics
          type: 'loop',
          perPage: 3,
          autoplay: false,
          gap: '3rem',
          direction: TTB,
          arrows: true,
          pagination: true,
          height: '300rem',
          autoHeight: true,
          rewind: true,
        }}
      >
        {projects.map((project, index) => (
          <SplideSlide key={index}>
            <div className="project-card">
              <h3 className="project-title">{project.title}</h3>

              <Splide
                options={{
                  //type: 'loop',
                  perPage: 1,
                  arrows: true,
                  //height: '600px',
                  pagination: true,
                  autoHeight: true,
                }}
              >
                {project.images.map((src, i) => (
                  <SplideSlide key={i}>
                    <img src={src} alt={src.title} className="project-img" />
                  </SplideSlide>
                ))}
              </Splide>

              <p className="project-description">{project.description}</p>
              <p className="project-technologies">{project.technologies}</p>
              <div className="project-repo">
                {project.repo}
                <FontAwesomeIcon
                  icon={faGithub}
                  color="pink"
                  className="anchor-icon"
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
