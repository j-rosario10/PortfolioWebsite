// Project data for the personal website
const projects = [
  {
    id: 1,
    title: "Wifi-Controlled RC Car (Feb 2025)",
    description: "Built a fully functional RC car with 3D-printed parts and wireless control via a custom web interface using Arduino and a D1 Mini Pro.",
    fullDescription: "This project combined mechanical design, electronics, and firmware development to create a remote-controlled car operable over WiFi. I designed and assembled the chassis using 3D-printed parts and implemented a drive system powered by a DC motor and a front steering system controlled by a servo motor. Using the D1 Mini Pro microcontroller, I developed custom Arduino code that mapped steering angles and speed controls to a web-based interface, enabling smooth, wireless operation of the vehicle. The project emphasized real-time control, efficient integration of components, and hands-on application of embedded systems.",
    image: ["/assets/images/IMG_7215.jpeg", "/assets/images/IMG_7216.jpeg"],
    technologies: ["Arduino", "C", "3D Printing"],
  },
  {
    id: 2,
    title: "Autonomous Color-Sorting Robot (Dec 2024)",
    description: "Developed a robot with sensor-based navigation and color-sorting logic using C++ and RobotC, featuring sound-activated automation and file-based coordinate mapping.",
    fullDescription: "This project involved designing and programming a robot capable of autonomously sorting objects by color. Using RobotC, I integrated multiple sensors—including color, touch, gyro, and sound—to enable precise navigation and object handling. I implemented file-based coordinate mapping in C++ to direct the robot’s movements and used motor encoder logic for consistent and repeatable actions. One of the key innovations was a sound detection function that activated specific tasks, significantly reducing the need for manual input. This enhancement led to a 25% improvement in sorting efficiency and reduced manual intervention by 80%, showcasing the effectiveness of embedded automation.",
    image: ["/assets/images/IMG_6040.jpg", "/assets/images/ad2109a6-f4f6-4f26-9dfe-49d7e1621000.jpg"],
    technologies: ["C++", "RobotC"],
  },
  {
    id: 3,
    title: "CAD Machined Keychain (Oct 2024)",
    description: "Designed and fabricated a custom keychain using SOLIDWORKS and hands-on machining with 3D printing, lathe, mill, and drill press.",
    fullDescription: "In this project, I created a custom multi-component keychain from concept to final assembly. Using SOLIDWORKS, I modeled each part, planned dimensions, and generated detailed technical drawings to support fabrication. I manufactured the components using a combination of 3D printing and manual machining, including lathe operations, milling, and precision drilling. The project involved mechanical assembly with attention to fit and finish, where I used calipers and other measurement tools to ensure accurate alignment and a high-quality result. This experience strengthened my skills in CAD design, technical drawing interpretation, and practical machining techniques.",
    image: ["/assets/images/8777c44c-666d-4a87-9438-9877b6c92778.jpg", "/assets/images/3196f566-52b4-4d99-a76f-9b6948e0ff5c.jpg", "assets/images/IMG_7221.jpeg"],
    technologies: ["SOLIDWORKS", "Lathe", "Milling Machine", "Drill Press", "3D Printing"],
  },
  {
    id: 4,
    title: "Math IA: Properties of Sound Waves (Apr 2023)",
    description: "Analyzed piano soundwaves using Arduino and Audacity, applying mathematical modeling to explore frequency, amplitude, and waveform behavior.",
    fullDescription: "This math-focused project explored the properties of sound waves generated by piano notes. I built a circuit using Arduino and a speaker to produce custom-coded tones and recorded the resulting soundwaves using Audacity. Through detailed waveform analysis, I investigated characteristics such as frequency, amplitude, and phase. Using Python and mathematical modeling, I derived sine wave equations to represent each note and compared their behaviors. This project combined electronics, coding, and data analysis to demonstrate the real-world application of math in sound and wave theory.",
    image: ["/assets/images/IMG_5767.jpeg", "/assets/images/IMG_5768.jpeg"],
    technologies: ["Audacity", "Arduino", "C"],
  },
  {
    id: 5,
    title: "Electric Longboard with Regenerative Braking",
    description: "Built a custom electric longboard with regenerative braking capabilities. The project involved electrical engineering, mechanical design, and embedded programming.",
    fullDescription: "This electric longboard project combined my interests in sustainable transportation, electronics, and mechanical design. The custom-built electric drivetrain features a brushless DC motor, regenerative braking system, and a battery management system optimized for range and performance.\n\nThe deck and truck assembly were specially designed to accommodate the electrical components while maintaining the feel of a traditional longboard. I used SOLIDWORKS to design custom motor mounts and enclosures that were then manufactured using a combination of 3D printing and CNC machining.\n\nThe control system is based on an Arduino microcontroller that manages motor speed, regenerative braking intensity, and battery monitoring. A custom handheld remote provides intuitive control with real-time telemetry. The regenerative braking system recovers approximately 12% of energy during typical use, extending the range significantly.",
    image: "/assets/images/project5.jpg",
    technologies: ["Arduino", "Electrical Engineering", "SOLIDWORKS", "3D Printing", "Embedded Systems"],
  },
 
];

export default projects;