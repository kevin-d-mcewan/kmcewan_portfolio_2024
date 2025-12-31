import SnowCarver1 from '../assets/images/project_images/SnowCarver_Game/Snow_Carver_SS1.png'
import SnowCarver2 from '../assets/images/project_images/SnowCarver_Game/Snow_Carver_SS2.png'
import SnowCarver3 from '../assets/images/project_images/SnowCarver_Game/Snow_Carver_SS3.png'
import BaseballQuiz1_PNG from '../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_CorrectAnswer.png'
import BaseballQuiz2_PNG from '../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_Ques1.png'
import BaseballQuiz3_PNG from '../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_FinalScore.png'
import BaseballQuiz4_PNG from '../assets/images/project_images/BaseballQuiz_Unity/Baseball_Quiz_WrongAnswer.png'
import AstroidAvoid_PNG from '../assets/images/project_images/AstroidAvoider_Unity_Game/Astroid_Avoider_UnityAndGameView.png'
import AstroidAvoid_SVG from '../assets/images/project_images/AstroidAvoider_Unity_Game/Astroid_Avoider_UnityAndGameView.svg'
import PCT_SS2_SVG from '../assets/images/project_images/PitchCountTracker_iOS_App/PCT_WatchOS_SimSS_2_SVG.svg'
import PCT_SS3_SVG from '../assets/images/project_images/PitchCountTracker_iOS_App/PCT_WatchOS_SimSS_3_SVG.svg'
import PCT_SS4_SVG from '../assets/images/project_images/PitchCountTracker_iOS_App/PCT_WatchOS_SimSS_4_SVG.svg'

export const projects = [
  {
    title: 'Baseball Quiz',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id ' +
      'est laborum. ',
    image: BaseballQuiz1_PNG,
    technologies: ['Unity', 'C-Sharp'],
    githubUrl: 'https://github.com/kevin-d-mcewan/Baseball-Quiz-3000',
  },
  {
    title: 'Snow Carver',
    description:
      'This is a game made in Unity in the 2D game engine. I have used C# as the coding language' +
      'in the scripts in order for the game mechanics to work.',
    // image: SnowCarver1,
    image: SnowCarver2,
    technologies: ['Unity', 'C#'],
    githubUrl: 'https://github.com/username/project2',
  },
  {
    title: 'Astroid Avoider',
    description: 'C# app that help where are the best moves and chances',
    image: AstroidAvoid_SVG,
    technologies: ['C#', 'Unity'],
    githubUrl: 'https://github.com/kevin-d-mcewan/Mobile_StarshipFighter_2.5D/tree/main/Assets',
  },
  {
    title: 'Pitch Count Tracker',
    description:
      'This is a stand alone watchOS app made in the Apple iOS Ecosystem. It uses SwiftUI' +
      'in order to make the app work. This was created in XCode through my own developers license. This' +
      ' is theinitial release of this app. I plan on adding an iOS Phone App that works in conjunction with ' +
      'this watch app.',
    image: PCT_SS2_SVG,
    technologies: ['SwiftUI'],
    githubUrl: 'https://github.com/kevin-d-mcewan/watchOS_PitchCountTracker',
  },
]
