import { useEffect, useState } from "react";
import myFace from "./calm-portrait-of-a-young-man.png";
import SkillChart from "./skill-chart";

// import etherScreen1 from "./ether-app-screens/ether-app-screenshot-1.jpg"
import etherScreen2 from "./ether-app-screens/ether-app-screenshot-2.jpg"
import etherScreen3 from "./ether-app-screens/ether-app-screenshot-3.jpg"
import etherScreen4 from "./ether-app-screens/ether-app-screenshot-4.jpg"
import etherScreen5 from "./ether-app-screens/ether-app-screenshot-5.jpg"
import etherScreen6 from "./ether-app-screens/ether-app-screenshot-6.jpg"
import etherScreen7 from "./ether-app-screens/ether-app-screenshot-7.jpg"
import etherScreen8 from "./ether-app-screens/ether-app-screenshot-8.jpg"
import etherScreen9 from "./ether-app-screens/ether-app-screenshot-9.jpg"
import etherScreen10 from "./ether-app-screens/ether-app-screenshot-10.jpg"
import etherScreen11 from "./ether-app-screens/ether-app-screenshot-11.jpg"
import ether_system_1 from "./ether-system/system.jpg"
import shopClientImage1 from "./odoo-client/image1.jpg"
import shopClientImage2 from "./odoo-client/image2.jpg"
import shopClientImage3 from "./odoo-client/image3.jpg"
import shopClientImage4 from "./odoo-client/image4.jpg"
import CRTImage, { CRTImage2 } from "./crt-image";

const etherAppScreens = [
  // {
  //   description: 'Show transaction history',
  //   image: etherScreen1,
  //   // remove this
  // },
  {
    description: 'Home screen',
    image: etherScreen3,
  },
  {
    description: 'Profile screen',
    image: etherScreen2,
  },
  {
    description: 'Show remittance history',
    image: etherScreen4,
  },
  {
    description: 'Remittance step #1',
    image: etherScreen5,
  },
  {
    description: 'Remittance step #2',
    image: etherScreen6,
  },
  {
    description: 'Remittance step #3.1',
    image: etherScreen7,
  },
  {
    description: 'Remittance step #3.2',
    image: etherScreen8,
  },
  {
    description: 'Remittance details',
    image: etherScreen10,
  },
  {
    description: 'GBP payment within UK',
    image: etherScreen9,
  },
  {
    description: 'Login screen',
    image: etherScreen11,
  },
]

const odooClientImages = [
  {
    description: 'Home page showing all products and categories',
    image: shopClientImage1,
  },
  {
    description: 'Product attributes',
    image: shopClientImage4,
  },
  {
    description: 'Show cart',
    image: shopClientImage2,
  },
  {
    description: 'Order history',
    image: shopClientImage3,
  },
]

const projectData = [
  {
    id: 1,
    title: "Ether Services App",
    // shortDescription:
    // "Ether Services Ltd App. The app allows customers to register, complete KYC, create remittance transactions, and pay through payment gateways.",
    description:
      `<p class="text-2xl text-amber-400">Remittance &amp; Online Banking App</p>
      <p>Features:</p>
      <ul class="list-disc ml-4">
        <li>Register and complete KYC</li>
        <li>Create remittance transactions</li>
        <li>Native integration for payment gateways (Card, ApplePay, Open Banking)</li>
        <li>Make GBP payments within UK</li>
        <li>Update notifications</li>
      </ul>`,
    images: etherAppScreens,
  },
  {
    id: 22,
    title: "Ether Services Remittance System",
    // shortDescription:
    // "Ether Services Ltd App. The app allows customers to register, complete KYC, create remittance transactions, and pay through payment gateways.",
    description:
      `<p class="text-2xl text-amber-400">Remittance &amp; Online Banking System</p>
      <p class="text-xl">As the maintainer of this system I implemented the following:</p>
      <ul class="list-disc ml-4">
        <li>Multi-company remittance</li>
        <li>Compliance rules based on company policy</li>
        <li>Payment gateways integration</li>
        <li>Banking as a Service APIs integration</li>
        <li>Multiple other APIs integration</li>
        <li>Created APIs for the mobile app</li>
      </ul>`,
    images: [
      {
        image: ether_system_1,
      },
    ]
  },
  {
    id: 23,
    title: "Shopping App for Odoo",
    // shortDescription:
    // "Ether Services Ltd App. The app allows customers to register, complete KYC, create remittance transactions, and pay through payment gateways.",
    description:
      `<p class="text-2xl text-amber-400">Open Source Project</p>
      <p class="text-sx">Features:</p>
      <ul class="list-disc ml-4">
        <li>Similar to odoo /shop page</li>
        <li>View and search products</li>
        <li>Select product attributes</li>
        <li>Add to cart</li>
      </ul>`,
    images: odooClientImages,
  },
];

function Projects() {
  const [selected, setSelected] = useState(projectData[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selected.id]);

  const selectedImages = selected.images ?? [selected.image];
  const currentImage = selectedImages[currentImageIndex];
  const canPrev = currentImageIndex > 0;
  const canNext = currentImageIndex < selectedImages.length - 1;

  return (
    <section className="mt-10 w-full max-w-screen-xl px-4 md:px-6">
      <h2 className="text-3xl font-bold mb-6 text-slate-100">My Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[60vh]">
        <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-[0_0_25px_rgba(8,39,63,0.4)] overflow-hidden">
          <h3 className="text-xl font-semibold mb-3 text-slate-200">Project List</h3>
          <div className="overflow-y-auto pr-2 space-y-3">
            {projectData.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelected(project)}
                className={`block w-full text-left rounded-lg p-3 border transition ${selected.id === project.id
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.45)]"
                  : "border-slate-700 bg-slate-800/80 text-slate-200 hover:border-cyan-400 hover:bg-cyan-500/10"
                  }`}
              >
                <p className="font-semibold">{project.title}</p>
                <p className="text-sm text-slate-300">{project.shortDescription}</p>
                <div className="text-sm text-slate-400 mt-2 ml-2" dangerouslySetInnerHTML={{ __html: project.description }} />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-[0_0_25px_rgba(8,39,63,0.4)]">
          <h3 className="text-xl font-semibold mb-3 text-slate-200">Project Preview</h3>
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <div className="w-full">
              <div className="relative rounded-lg border border-slate-600 overflow-hidden p-2">
                <p className="m-2 text-xl">#{JSON.stringify(currentImageIndex + 1)}</p>
                {currentImage.description ? <p className="m-2 text-3xl text-amber-400">{currentImage.description}</p> : null}
                <img
                  src={currentImage.image}
                  alt={`${selected.title} screenshot ${currentImageIndex + 1}`}
                  className="h-auto w-full object-cover rounded-2xl"
                />
                {selectedImages.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-3">
                    {/* Prev Button */}
                    <button
                      onClick={() => canPrev && setCurrentImageIndex((idx) => idx - 1)}
                      disabled={!canPrev}
                      className={`
      group relative flex items-center justify-center
      h-9 w-9 rounded-full
      border transition-all duration-200 ease-out
      ${canPrev
                          ? "border-cyan-400/40 bg-black/40 backdrop-blur-sm text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/70 hover:scale-110 active:scale-95 shadow-lg hover:shadow-cyan-500/20"
                          : "border-white/10 bg-black/20 text-white/20 cursor-not-allowed"
                        }
    `}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${canPrev ? "group-hover:-translate-x-0.5" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={() => canNext && setCurrentImageIndex((idx) => idx + 1)}
                      disabled={!canNext}
                      className={`
      group relative flex items-center justify-center
      h-9 w-9 rounded-full
      border transition-all duration-200 ease-out
      ${canNext
                          ? "border-cyan-400/40 bg-black/40 backdrop-blur-sm text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/70 hover:scale-110 active:scale-95 shadow-lg hover:shadow-cyan-500/20"
                          : "border-white/10 bg-black/20 text-white/20 cursor-not-allowed"
                        }
    `}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${canNext ? "group-hover:translate-x-0.5" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                )}
              </div>
              {selectedImages.length > 1 && (
                <div className="mt-2 flex items-center gap-2 justify-center">
                  {selectedImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`h-2 w-2 rounded-full ${i === currentImageIndex ? "bg-cyan-300" : "bg-slate-600"}`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Obay() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-10 gap-10">
      {/* <div className="text-5xl text-red-500 border border-red-500 rounded-2xl p-6 shadow shadow-2xl shadow-amber-300 mb-24">
        ⚠️⚠️⚠️ This website is still a work in progress ⚠️⚠️⚠️
        <p className="text-2xl text-amber-500 mt-10">
          Information found here maybe INCORRECT, or a draft
        </p>
      </div> */}
      <div className="flex flex-row items-start justify-center gap-8 max-w-[1200px] w-full px-4 lg:px-0">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Hello, I’m Obay</h1>
          <p className="mb-6 text-slate-700">
            I’m a software engineer focused on building performant web and mobile applications with React, React Native, and Odoo.
          </p>
          <SkillChart myData={mainSkills} header='My Main Skills'/>
          <p className="text-slate-600">
            Browse my work below ⬇️.
          </p>
        </div>
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
          {/* <img src={myFace} alt="Portrait" className="w-full h-auto object-cover" /> */}
          <CRTImage2 src={myFace} />
        </div>
      </div>

      <Projects />
    </main>
  );
}

const mainSkills = [
  {
    label: 'Odoo',
    value: 9,
  },
  {
    label: 'React Native',
    value: 9,
  },
  {
    label: 'React',
    value: 7,
  },
  {
    label: 'Linux',
    value: 7,
  },
  {
    label: 'DevOps',
    value: 5,
  }
]
