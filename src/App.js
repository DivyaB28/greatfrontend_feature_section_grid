import "./App.css";
import FeatureCard from "./components/FeatureCard";
import useFetchdata from "./hooks/useFetchdata";
import {
  RiDownload2Line,
  RiBrushLine,
  RiCopyrightLine,
  RiRefund2Fill,
  RiTeamLine,
  RiRefreshLine,
} from "react-icons/ri";

const features = [
  {
    id: 1,
    icon: RiDownload2Line,
    title: "Infinite Download",
    info: "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
  },
  {
    id: 2,
    icon: RiBrushLine,
    title: "Purely Handcrafted",
    info: "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
  },
  {
    id: 3,
    icon: RiCopyrightLine,
    title: "All Are Under licensed",
    info: "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).",
  },
  {
    id: 4,
    icon: RiRefund2Fill,
    title: "Cancel Anytime",
    info: "Subscribe at your own pace, and cancel when you feel it's enough.",
  },
  {
    id: 5,
    icon: RiTeamLine,
    title: "Empowering For Team",
    info: "We support multiple seats at once, requiring only a single payment.",
  },
  {
    id: 6,
    icon: RiRefreshLine,
    title: "No Limitations",
    info: "Use as many as you want, from Dribbble presentations to PowerPoint presentations.",
  },
];

function App() {
  const { data, error, isLoading } = useFetchdata();

  if (isLoading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>Error : {error.message}</div>;
  }
  const { subHeading = "", heading = "", description = "" } = data;

  return (
    <>
      {data && (
        <main>
          <div className="header_wrapper">
            <p className="subHeading">{subHeading}</p>
            <h1>{heading}</h1>
            <p className="description">{description}</p>
          </div>
          <section>
            <ul>
              <div
                className="feature_wrapper"
                aria-describedby="Feature list grid view"
              >
                {features.map(({ id, title, info, icon }) => (
                  <FeatureCard
                    key={id}
                    title={title}
                    description={info}
                    Icon={icon}
                  />
                ))}
              </div>
            </ul>
          </section>
        </main>
      )}
    </>
  );
}

// Premium abstract images

// Easy access to top quality images

// In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.

// - Infinite Download: Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.
// - Purely Handcrafted: No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.
// - All Are Under licensed: The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).
// - Cancel Anytime: Subscribe at your own pace, and cancel when you feel it's enough.
// - Empowering For Team: We support multiple seats at once, requiring only a single payment.
// - No Limitations: Use as many as you want, from Dribbble presentations to PowerPoint presentations.

export default App;
